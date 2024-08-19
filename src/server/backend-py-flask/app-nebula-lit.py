from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from nebula2.gclient.net import ConnectionPool
from nebula2.Config import Config
from nebula2.graph import GraphClient
import logging
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure logging
if not os.path.exists('logs'):
    os.makedirs('logs')

file_handler = logging.FileHandler('logs/app.log')
file_handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
app.logger.addHandler(file_handler)

app.logger.setLevel(logging.INFO)
app.logger.info('Starting the TODO application with Nebula Graph')

# Nebula Graph connection setup
config = Config()
config.max_connection_pool_size = 10
connection_pool = ConnectionPool()
assert connection_pool.init([('127.0.0.1', 9669)], config)
client = connection_pool.get_session('root', 'nebula')

@app.route('/api/todos', methods=['GET'])
def get_todos():
    """Fetch all TODO items."""
    app.logger.info('Fetching all TODO items from Nebula Graph')
    todos = []
    try:
        query = 'MATCH (t:Todo) RETURN t.id, t.title'
        result = client.execute(query)
        if not result.is_succeeded():
            abort(500, description="Failed to execute query")

        for row in result.rows():
            todo_id = row.values[0].as_string()
            title = row.values[1].as_string()
            todos.append({'id': todo_id, 'title': title})

    except Exception as e:
        app.logger.error(f'Error fetching TODOs: {e}')
        abort(500, description="Internal server error")

    return jsonify(todos)

@app.route('/api/todos', methods=['POST'])
def add_todo():
    """Add a new TODO item."""
    if not request.json or 'title' not in request.json:
        app.logger.warning('Invalid request: Missing title')
        abort(400, description="Invalid request: title is required")

    todo_id = str(uuid.uuid4())  # Generate a unique ID for the TODO item
    title = request.json['title']
    try:
        query = f'CREATE (t:Todo {{id: "{todo_id}", title: "{title}"}})'
        result = client.execute(query)
        if not result.is_succeeded():
            abort(500, description="Failed to execute query")

        app.logger.info(f'Added new TODO item with ID: {todo_id}')
        return jsonify({'id': todo_id, 'title': title}), 201

    except Exception as e:
        app.logger.error(f'Error adding TODO: {e}')
        abort(500, description="Internal server error")

@app.route('/api/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    """Delete a TODO item by ID."""
    try:
        query = f'MATCH (t:Todo {{id: "{todo_id}"}}) DELETE t'
        result = client.execute(query)
        if not result.is_succeeded():
            abort(404, description="Todo not found")

        app.logger.info(f'Deleted TODO item with ID: {todo_id}')
        return '', 204

    except Exception as e:
        app.logger.error(f'Error deleting TODO: {e}')
        abort(500, description="Internal server error")

# Serve the static files (frontend)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    """Serve the frontend files."""
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)

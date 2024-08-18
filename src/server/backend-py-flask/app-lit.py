from flask import Flask, jsonify, request, abort, send_from_directory
from flask_cors import CORS
import couchdb
import uuid
import logging
import os

app = Flask(__name__, static_folder='../../ui/frontend-lit-ts/dist')
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
app.logger.info('Starting the TODO application')

# CouchDB connection
couch = couchdb.Server('http://admin:admin@localhost:5984/')
db_name = 'todos'

if db_name in couch:
    db = couch[db_name]
    app.logger.info(f'Connected to the existing CouchDB database: {db_name}')
else:
    db = couch.create(db_name)
    app.logger.info(f'Created a new CouchDB database: {db_name}')

@app.route('/api/todos', methods=['GET'])
def get_todos():
    """Fetch all TODO items."""
    app.logger.info('Fetching all TODO items')
    todos = []
    for doc_id in db:
        doc = db[doc_id]
        todos.append({
            'id': doc_id,
            'title': doc.get('title')
        })
    return jsonify(todos)

@app.route('/api/todos', methods=['POST'])
def add_todo():
    """Add a new TODO item."""
    if not request.json or 'title' not in request.json:
        app.logger.warning('Invalid request: Missing title')
        abort(400, description="Invalid request: title is required")

    todo_id = str(uuid.uuid4())  # Generate a unique ID for the TODO item
    todo_data = {
        '_id': todo_id,
        'title': request.json['title']
    }
    db.save(todo_data)
    app.logger.info(f'Added new TODO item with ID: {todo_id}')
    return jsonify({'id': todo_id, 'title': request.json['title']}), 201

@app.route('/api/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    """Delete a TODO item by ID."""
    if todo_id not in db:
        app.logger.warning(f'TODO item with ID {todo_id} not found')
        abort(404, description="Todo not found")

    doc = db[todo_id]
    db.delete(doc)
    app.logger.info(f'Deleted TODO item with ID: {todo_id}')
    return '', 204

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

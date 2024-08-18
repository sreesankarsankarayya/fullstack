import logging
from logging.handlers import RotatingFileHandler

import os
from flask import Flask, jsonify, request, send_from_directory
import couchdb

app = Flask(__name__, static_folder="../../ui/dist")

# Configure logging
if not os.path.exists('logs'):
    os.makedirs('logs')

file_handler = RotatingFileHandler('logs/todo_app.log', maxBytes=10240, backupCount=10)
file_handler.setFormatter(logging.Formatter(
    '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
))
file_handler.setLevel(logging.INFO)
app.logger.addHandler(file_handler)

app.logger.setLevel(logging.DEBUG)
app.logger.info('TodoApp startup')

# Connect to CouchDB
couch = couchdb.Server('http://admin:admin@localhost:5984/')
db_name = "todo"
if db_name in couch:
    db = couch[db_name]
else:
    db = couch.create(db_name)
    app.logger.info(f'Database "{db_name}" created in CouchDB')

@app.route('/api/todos', methods=['GET'])
def get_todos():
    try:
        # Fetch all documents in the database
        todos = []
        for doc_id in db:
            doc = db[doc_id]
            doc['_id'] = doc_id  # Ensure the ID is included
            todos.append(doc)
            
        app.logger.debug(todos)
        app.logger.info('Fetched all TODO items')
        return jsonify(todos)
    
    except Exception as e:
        app.logger.error(f'Error fetching TODO items: {e}')
        return jsonify({"error": "Could not fetch TODO items"}), 500
    
@app.route('/api/todos', methods=['GET'])
def X_get_todos():
    app.logger.info('Fetching all TODO items')
    todos = [todo for todo in db]
    app.logger.debug(todos)
    return jsonify(todos)

@app.route('/api/todos', methods=['POST'])
def add_todo():
    todo_data = request.json
    db.save(todo_data)
    app.logger.info(f'TODO item added: {todo_data}')
    return jsonify(todo_data), 201

@app.route('/api/todos/<id>', methods=['DELETE'])
def delete_todo(id):
    todo = db[id]
    db.delete(todo)
    app.logger.info(f'TODO item deleted: {id}')
    return '', 204

# Serve the React app
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        app.logger.info(f'Serving static file: {path}')
        return send_from_directory(app.static_folder, path)
    else:
        app.logger.info('Serving index.html')
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)

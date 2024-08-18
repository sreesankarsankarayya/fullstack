import React, { useState, useEffect } from 'react';

interface Todo {
  _id: string;
  title: string;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [removingTodo, setRemovingTodo] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/todos')
      .then(response => response.json())
      .then((data: Todo[]) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTodo }),
      })
        .then(response => response.json())
        .then((todo: Todo) => setTodos([...todos, todo]));
      setNewTodo('');
    }
  };

  const deleteTodo = (id: string) => {
    setRemovingTodo(id);
    setTimeout(() => {
      fetch(`/api/todos/${id}`, { method: 'DELETE' })
        .then(() => setTodos(todos.filter(todo => todo._id !== id)));
      setRemovingTodo(null);
    }, 500); // Delay to allow animation to play
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo._id}
            className={removingTodo === todo._id ? 'fade-out' : ''}
          >
            {todo.title}
            <button onClick={() => deleteTodo(todo._id)}>✔</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

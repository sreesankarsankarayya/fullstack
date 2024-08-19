import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './todo-item';
import './todo-input';

interface Todo {
  id: string;
  title: string;
}

@customElement('todo-app')
export class TodoApp extends LitElement {
  @state()
  private todos: Todo[] = [];

  static styles = css`
    :host {
      display: block;
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      color: #ecf0f1;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eae4);
      background-size: 800% 800%;
      animation: gradientAnimation 15s ease infinite;
    }

    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 1.5rem 0 0 0;
      max-height: 250px;
      overflow-y: auto;
      border: 1px solid #34495e;
      border-radius: 8px;
      background-color: #1f2d3d;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.fetchTodos();
  }

  private async fetchTodos() {
    try {
      const response = await fetch('http://localhost:5000/api/todos');
      if (response.ok) {
        this.todos = await response.json();
      } else {
        console.error('Failed to fetch todos:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  private async addTodoHandler(event: CustomEvent) {
    const title = event.detail.title;
    try {
      const response = await fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        const todo: Todo = await response.json();
        this.todos = [...this.todos, todo];
      } else {
        console.error('Failed to add todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  private async deleteTodoHandler(event: CustomEvent) {
    const id = event.detail.id;
    try {
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      } else {
        console.error('Failed to delete todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  render() {
    return html`
      <h1>Todo List</h1>
      <todo-input @add-todo="${this.addTodoHandler}"></todo-input>
      <ul>
        ${this.todos.map(
          (todo) => html`
            <todo-item
              .id="${todo.id}"
              .title="${todo.title}"
              @delete-todo="${this.deleteTodoHandler}"
            ></todo-item>
          `
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-app': TodoApp;
  }
}

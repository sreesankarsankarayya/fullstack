import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface Todo {
  id?: string;
  title: string;
}

@customElement('todo-app')
export class TodoApp extends LitElement {
  @state()
  private todos: Todo[] = [];

  @state()
  private newTodo: string = '';

  static styles = css`
    :host {
      display: block;
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #2c3e50;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      color: #ecf0f1;
      font-family: 'Poppins', sans-serif;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    input {
      width: calc(100% - 2rem);
      padding: 1rem;
      border: none;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      background-color: #34495e;
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    button {
      padding: 0.75rem 2rem;
      background: linear-gradient(135deg, #6dd5ed, #2193b0);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 8px 15px rgba(33, 147, 176, 0.3);
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
      background-color: #6dd5ed;
      transform: translateY(-3px);
      box-shadow: 0 12px 24px rgba(33, 147, 176, 0.4);
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

    li {
      background-color: #2c3e50;
      border-bottom: 1px solid #1f2d3d;
      padding: 1rem;
      margin-bottom: 0.5rem;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    li button {
      background-color: #e74c3c;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      color: white;
      font-size: 1rem;
    }

    li button:hover {
      background-color: #c0392b;
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

  private async addTodo() {
    if (this.newTodo.trim()) {
      try {
        const response = await fetch('http://localhost:5000/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: this.newTodo }),
        });

        if (response.ok) {
          const todo: Todo = await response.json();
          this.todos = [...this.todos, todo];
          this.newTodo = '';
        } else {
          console.error('Failed to add todo:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  }

  private async deleteTodo(id?: string) {
    if (id) {
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
  }

  private handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.newTodo = target.value;
  }

  render() {
    return html`
      <h1>Todo List</h1>
      <input
        type="text"
        .value="${this.newTodo}"
        @input="${this.handleInputChange}"
        placeholder="Add a new todo"
      />
      <button @click="${this.addTodo}">Add</button>
      <ul>
        ${this.todos.map(
          (todo) => html`
            <li>
              ${todo.title}
              <button @click="${() => this.deleteTodo(todo.id)}">&times;</button>
            </li>
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

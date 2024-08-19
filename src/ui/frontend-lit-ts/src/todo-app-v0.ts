import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('todo-app')
export class TodoApp extends LitElement {
  @state()
  private todos: { id: string; title: string }[] = [];

  static styles = css`
    :host {
      display: block;
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(270deg, #1e3c72, #2a5298, #ff7e5f, #feb47b);
      background-size: 600% 600%;
      animation: gradientBackground 15s ease infinite;
    }

    @keyframes gradientBackground {
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
      background: linear-gradient(45deg, #f3ec78, #af4261, #1e3c72, #2a5298);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: textGradient 5s ease infinite;
      background-size: 400% 400%;
    }

    @keyframes textGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
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
      background: linear-gradient(45deg, #ff6e7f, #bfe9ff, #feb47b, #86a8e7);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, background 5s ease infinite;
      background-size: 200% 200%;
      animation: buttonGradient 10s ease infinite;
    }

    li button:hover {
      transform: scale(1.1);
    }

    input {
      width: calc(100% - 2rem);
      padding: 1rem;
      border: none;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      background: linear-gradient(45deg, #43cea2, #185a9d, #feb47b, #86a8e7);
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      text-align: center;
      animation: inputGradient 10s ease infinite;
      background-size: 200% 200%;
    }

    @keyframes inputGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    button {
      padding: 0.75rem 2rem;
      background: linear-gradient(45deg, #ff6e7f, #bfe9ff, #feb47b, #86a8e7);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 8px 15px rgba(33, 147, 176, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-size: 200% 200%;
      animation: buttonGradient 10s ease infinite;
    }

    @keyframes buttonGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 24px rgba(33, 147, 176, 0.4);
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

  private async addTodoHandler(event: Event) {
    const input = this.shadowRoot!.querySelector('input');
    const title = input?.value.trim();
    if (!title) return;

    try {
      const response = await fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        const todo = await response.json();
        this.todos = [...this.todos, todo];
        if (input) input.value = '';
      } else {
        console.error('Failed to add todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  private async deleteTodoHandler(id: string) {
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
      <input type="text" placeholder="Add a new todo" />
      <button @click="${this.addTodoHandler}">Add</button>
      <ul>
        ${this.todos.map(
          (todo) => html`
            <li>
              ${todo.title}
              <button @click="${() => this.deleteTodoHandler(todo.id)}">&times;</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-app-v0': TodoApp;
  }
}

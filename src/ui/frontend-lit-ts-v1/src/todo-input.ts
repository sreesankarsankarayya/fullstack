import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('todo-input')
export class TodoInput extends LitElement {
  @state()
  private newTodo: string = '';

  static styles = css`
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
  `;

  private handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.newTodo = target.value;
  }

  private handleAddTodo() {
    if (this.newTodo.trim()) {
      const addEvent = new CustomEvent('add-todo', {
        detail: { title: this.newTodo },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(addEvent);
      this.newTodo = '';
    }
  }

  render() {
    return html`
      <input
        type="text"
        .value="${this.newTodo}"
        @input="${this.handleInputChange}"
        placeholder="Add a new todo"
      />
      <button @click="${this.handleAddTodo}">Add</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-input': TodoInput;
  }
}

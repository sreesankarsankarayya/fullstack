import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('todo-item')
export class TodoItem extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) id = '';
  
  static styles = css`
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

    button {
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

    button:hover {
      background-color: #c0392b;
    }
  `;

  private handleDelete() {
    const deleteEvent = new CustomEvent('delete-todo', {
      detail: { id: this.id },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(deleteEvent);
  }

  render() {
    return html`
      <li>
        ${this.title}
        <button @click="${this.handleDelete}">&times;</button>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-item': TodoItem;
  }
}
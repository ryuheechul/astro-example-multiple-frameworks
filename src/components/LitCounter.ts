import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-counter')
export class LitCounter extends LitElement {
  @property()
  declare count: number;

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  render() {
    return html`
      <!-- to compensate shadowRoot -->
      <link rel="stylesheet" href="/styles/counter.css" />
      <div class="counter">
        <button type="button" @click=${this.decrement}>-</button>
        <pre>${this.count}</pre>
        <button type="button" @click=${this.increment}>+</button>
      </div>
      <div class="counter-message">
        <slot></slot>
      </div>
    `;
  }
}

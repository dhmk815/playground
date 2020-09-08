import { LitElement, html } from "http://unpkg.com/lit-element?module";
import { autorun } from "https://unpkg.com/mobx?module";
import { store } from "./store.js";

class CountToolbar extends LitElement {
  static get properties() {
    console.log("[CountToolbar]" + " get properties has been called!");
    return {
      count: { type: Number },
    };
  }

  constructor() {
    console.log("[CountToolbar]" + " constructor has been called");
    super();
  }

  connectedCallback() {
    console.log("[CountToolbar]" + " connectedCallback has been called!");
    super.connectedCallback();

    // pull observable variable from store
    this.disposer = autorun(() => {
      this.count = store.count;
    });
  }

  disconnectedCallback() {
    console.log("[CountToolbar]" + " disconnectedCallback has been called!");
    this.disposer();
  }

  render() {
    console.log("[CountToolbar]" + " render has been called!");
    return html`
      You have a count of ${this.count}!
      <button @click=${() => store.resetCount()} alt="Reset Count">
        reset
      </button>
      <button @click=${() => store.decrementCount()} alt="decrement Count">
        -
      </button>
    `;
  }
}

customElements.define("count-toolbar", CountToolbar);

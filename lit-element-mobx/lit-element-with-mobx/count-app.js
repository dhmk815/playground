import { LitElement, html } from "http://unpkg.com/lit-element?module";
import { autorun } from "https://unpkg.com/mobx?module";
import { store } from "./store.js";

class CountApp extends LitElement {
  static get properties() {
    console.log("[CountApp]" + " get properties has been called!");
    return {
      count: { type: Number },
    };
  }

  constructor() {
    console.log("[CountApp]" + " constructor has been called");
    super();
    this.count = 10;
  }

  connectedCallback() {
    console.log("[CountApp]" + " connectedCallback has been called!");
    super.connectedCallback();

    // pull observable variable from store
    this.disposer = autorun(() => {
      this.count = store.count;
    });
  }

  disconnectedCallback() {
    console.log("[CountApp]" + " disconnectedCallback has been called!");
    this.disposer();
  }

  render() {
    console.log("[CountApp]" + " render has been called!");

    return html`
      <p>${this.count}</p>
      <button @click=${() => store.incrementCount()} alt="Increment Count">
        +
      </button>
      <button @click=${() => store.decrementCount()} alt="Decrement Count">
        -
      </button>
    `;
  }
}

customElements.define("count-app", CountApp);

import { LitElement, html } from "http://unpkg.com/lit-element?module";

class CountApp extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 10; // to set the initial local state of count as 0
  }

  render() {
    return html` ${this.count} `;
  }
}

customElements.define("count-app", CountApp);

import { LitElement, html } from "http://unpkg.com/lit-element?module";

class CountToolbar extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 20; // to set the initial local state of count as 0
  }

  render() {
    return html` Hey there user! You have a count of ${this.count}! `;
  }
}

customElements.define("count-toolbar", CountToolbar);

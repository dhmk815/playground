import { LitElement, html } from "http://unpkg.com/lit-element?module";

class CountToolbar extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 10;

    addEventListener("count-changed", this.countChanged.bind(this));
  }

  disconnectedCallback() {
    removeEventListener("count-changed", this.countChanged.bind(this));
  }

  countChanged(event) {
    this.count = event.detail.count;
  }

  render() {
    return html` Hey there user! You have a count of ${this.count}! `;
  }
}

customElements.define("count-toolbar", CountToolbar);

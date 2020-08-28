class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  // my-counter element의 count라는 이름의 attribute값을 가져와
  get count() {
    return this.getAttribute("count");
  }

  // my-counter element의 count라는 이름의 attribute값을 셋팅해
  set count(val) {
    this.setAttribute("count", val);
  }

  // 관찰대상인 attribute들의 key값이 뭔지 알려줘
  static get observedAttributes() {
    return ["count"];
  }

  // prop중에서 count라는 이름의 attribute가 만약에 변하면, this.render()로 화면을 다시 그려줘
  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "count") this.render();
    this.shadow
      .querySelector("#btn")
      .addEventListener("click", this.inc.bind(this));
  }

  inc() {
    this.count++;
  }
  // 만약 이 element가 host dom에 connect되었을 때 render()함수로 그려줘
  connectedCallback() {
    this.render();
    this.shadow
      .querySelector("#btn")
      .addEventListener("click", this.inc.bind(this));
  }

  // lifecycle마다 렌더를 해줘야 하는데, 렌더를 할 때마다 이벤트 리스너들이 해제된다.
  render() {
    this.shadow.innerHTML = `
			<h1>Counter</h1>
			${this.count}
			<button id='btn'>Increment</button>
		`;
  }
}

customElements.define("my-counter", MyCounter);

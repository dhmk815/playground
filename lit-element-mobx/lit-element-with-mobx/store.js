import {
  observable,
  decorate,
  computed,
  action,
  autorun,
} from "https://unpkg.com/mobx?module";

class Store {
  constructor() {
    this.count = 0;
  }

  decrementCount() {
    if (this.count > 0) {
      --this.count;
    }
  }
  incrementCount() {
    ++this.count;
  }
  resetCount() {
    this.count = 0;
  }
}

decorate(Store, {
  count: observable,
  decrementCount: action,
  incrementCount: action,
  resetCount: action,
});

// sigular instance of mobx store
export const store = new Store();

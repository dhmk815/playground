import { observable, computed, action, decorate } from "mobx-react";
import autorun from "mobx-react";

class TodoStore {
  todos = [];

  constructor() {
    autorun(() => console.log("TodoStore has been constructed!"));
  }

  get remainedTodosCount() {
    return this.todos.filter((todo) => todo.checked === false).length;
  }
  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}

decorate(TodoStore, {
  todos: observable,
  remainedTodosCount: computed,
});

export default new TodoStore();

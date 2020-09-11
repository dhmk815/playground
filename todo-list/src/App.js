import React from "react";
import createGlobalStyle from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

class App extends React.Component {
  render() {
    return (
      <>
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </>
    );
  }
}

export default App;

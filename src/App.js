import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Todo } from "./features/todos/Todo";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Redux-tookit Example</h1>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;

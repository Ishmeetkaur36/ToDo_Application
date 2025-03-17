import React from "react";

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

import "./style.css";

const App = () => {
  return (
       <div className= "todo-container">
        <Header title="todie app"/>
        <TodoItem text="eat" />
        <TodoItem completed = {true} text="code" />
        <TodoItem text="play" />
        <TodoItem text="sleep" />
        <TodoItem text="study" />
        <Button />
       </div>
  );
};

export default App;

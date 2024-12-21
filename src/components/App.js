import React, { useState, useMemo } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["New todo"]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <UseMemo todos={todos} />

      <hr />
      <ReactMemo />
    </div>
  );
};

export default App;



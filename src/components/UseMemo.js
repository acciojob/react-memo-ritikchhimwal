import React, { useMemo } from "react";

const UseMemo = ({ todos }) => {
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h3>Expensive Calculation</h3>
      <p>{expensiveCalculation}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;

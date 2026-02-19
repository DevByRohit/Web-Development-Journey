import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setcounter] = useState(0);

  function increaseCount() {
    setcounter(counter + 1);
  }
  function decreaseCount() {
    setcounter(counter - 1);
  }

  function jumpByFiveCount() {
    setcounter(counter + 5);
  }
  return (
    <div className="container">
      <h1>Counter value is: {counter}</h1>
      <div className="action-button">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={jumpByFiveCount}>Jump By 5</button>
      </div>
    </div>
  );
};

export default UseStateCounter;

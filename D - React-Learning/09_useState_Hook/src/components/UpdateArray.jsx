import React, { useState } from "react";

const UpdateArray = () => {
  const [arr, setArr] = useState([1, 2, 3, 4]);
  const addValue = () => {
    const newArr = [...arr];
    newArr.push(5);
    setArr(newArr);
  };

  const removeValue = () => {
    const newArr = [...arr];
    newArr.pop();
    setArr(newArr);
  };
  return (
    <div className="container">
      <h1>
        Arrays Values are:{" "}
        {arr.map((elem, key) => {
          return <span key={key}>{elem} </span>;
        })}
      </h1>
      <div className="action-button">
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </div>
  );
};

export default UpdateArray;

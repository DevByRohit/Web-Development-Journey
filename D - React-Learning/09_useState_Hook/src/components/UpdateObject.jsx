import React, { useState } from "react";

const UpdateObject = () => {
  const [object, setObject] = useState({ user: "Rohit", age: 21 });

  const changeName = () => {
    const newObject = { ...object };
    newObject.user = "Jatin";
    setObject(newObject);
  };

  const changeAge = () => {
    const newObject = { ...object };
    newObject.age = 23;
    setObject(newObject);
  };
  return (
    <div className="container">
      <h1>User Name: {object.user}</h1>
      <h1>User Age: {object.age}</h1>
      <div className="action-button">
        <button onClick={changeName}>Change User Name</button>
        <button onClick={changeAge}>Change User Age</button>
      </div>
    </div>
  );
};

export default UpdateObject;

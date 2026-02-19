import React from "react";
import UseStateCounter from "./components/UseStateCounter";
import UpdateArray from "./components/UpdateArray";
import UpdateObject from "./components/UpdateObject";
import BatchUpdate from "./components/BatchUpdate";

const App = () => {
  return (
    <>
      <UseStateCounter></UseStateCounter>
      <UpdateObject></UpdateObject>
      <UpdateArray></UpdateArray>
      <BatchUpdate></BatchUpdate>
    </>
  );
};

export default App;

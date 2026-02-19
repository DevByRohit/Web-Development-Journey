import React, { useState } from "react";

const BatchUpdate = () => {
  const [num, setNum] = useState(10);

  const updateBatch = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // Instead of doing this
    // do like this for correct output
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    // this called batch update
  };
  return (
    <div className="container">
      <h1>Batch value is: {num}</h1>
      <button onClick={updateBatch}>Update Batch</button>
    </div>
  );
};

export default BatchUpdate;

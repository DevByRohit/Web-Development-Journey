import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", user);
    setUser("");
  };

  return (
    <div className="form-container">
      <h1>Two Way Binding</h1>
      <form
        className="form-element"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name here..."
          value={user}
          onChange={(e) => {
            let userInput = e.target.value;
            setUser(userInput);
          }}
        />
        <input type="submit" value="Submit form" />
      </form>
    </div>
  );
};

export default App;

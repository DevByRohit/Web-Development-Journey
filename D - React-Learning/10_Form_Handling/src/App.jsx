import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted sucessfully with: ", user);
    setUser("");
  };
  return (
    <div className="form-handling">
      <form
        className="form-element"
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            let inputValue = e.target.value;
            setUser(inputValue);
          }}
          value={user}
          placeholder="Enter your name here.."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;

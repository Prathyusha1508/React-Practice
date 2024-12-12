import React, { useRef } from "react";

function Uncontrolled() {
  const usernameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The submitted username is: " + usernameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Uncontrolled
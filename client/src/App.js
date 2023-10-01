import React, { useRef } from "react";

const App = () => {
  const emailRef = useRef();
  const numberRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredNumber = numberRef.current.value;

    // console.log(enteredEmail, enteredNumber);

    const requestBody = {
      email: enteredEmail,
      number: enteredNumber,
    };

    const response = await fetch("http://localhost:8000/api/auth/create", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <span>Email</span>
        <input type="email" ref={emailRef} />
        <br />
        <span>Number</span>
        <input type="number" ref={numberRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

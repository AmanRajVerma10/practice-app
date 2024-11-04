import React, { useState } from "react";

function Task3() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  const decrementHandler = () => {
    setCounter((prevValue) => {
      return prevValue - 1;
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
      <button onClick={decrementHandler} disabled={counter === 0}>
        Decrement
      </button>
    </div>
  );
}

export default Task3;

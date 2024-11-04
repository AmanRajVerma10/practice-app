import React, { useState } from "react";

function Task3() {
  const [counter, setCounter] = useState(0);
  const [val, setVal] = useState(0);

  const incrementHandler = () => {
    setCounter((prevValue) => {
      return prevValue + val;
    });
  };

  const decrementHandler = () => {
    setCounter((prevValue) => {
      return prevValue - val;
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <label>Increment/Decrement by</label>
      <input
        type="number"
        value={val}
        onChange={(e) => {
          const inputValue = +e.target.value;
          setVal(inputValue >= 0 ? inputValue : 0);
        }}
      ></input>
      <button onClick={incrementHandler}>Increment</button>
      <button
        onClick={() => {
          setCounter(0);
          setVal(0);
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

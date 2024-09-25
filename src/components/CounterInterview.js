import React, { useEffect, useRef, useState } from "react";

const CounterInterview = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(true);
  const [start, setStart] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!start) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setCounter((prevValue) => (increment ? prevValue + 1 : prevValue - 1));
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start, increment]);

  function startHandler() {
    setStart((prevValue) => !prevValue);
  }

  function resetHandler() {
    setCounter(0);
  }
  function directionHandler() {
    setIncrement(!increment);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={startHandler}>{start ? "Stop" : "Start"}</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={directionHandler}>Change Direction</button>
    </div>
  );
};

export default CounterInterview;

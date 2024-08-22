import React from "react";

const Counter = (props) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{marginTop:10,marginBottom:50}}><h1>{props.value}</h1></div>
        <button onClick={props.increaseFunction}>Click</button>
      </div>
    </>
  );
};

export default Counter;

import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterInterview from "./components/CounterInterview";
import Task3 from "./components/Task3";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const submitHandler = () => {
    const copyTasks = [...tasks];
    copyTasks.push(task);
    setTasks(copyTasks);
    setTask("");
  };

  function increaseHandler() {
    let temp = counter;
    setCounter(temp + 1);
  }

  function deleteHandler(i) {
    console.log(i);
  }

  return (
    <>
      <div
        style={{
          color: "GrayText",
          textAlign: "center",
          backgroundColor: "aqua",
          width: "300px", // Set the width of the box
          margin: "10px auto", // Center the box horizontally and add some space from the top
          padding: "20px", // Add padding inside the box
          borderRadius: "8px", // Optional: Add rounded corners
        }}
      >
        <h1>This is a practice arena!</h1>
        <input
          placeholder="Enter Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <button onClick={submitHandler}>Add Task</button>
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>
              {t} <button onClick={deleteHandler.bind(null, i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <Counter value={counter} increaseFunction={increaseHandler}></Counter>
      <CounterInterview />
      <Task3/>
    </>
  );
}

export default App;

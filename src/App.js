import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const submitHandler = () => {
    const copyTasks = [...tasks];
    copyTasks.push(task);
    setTasks(copyTasks);
    setTask("");
  };

  function deleteHandler(i){
    console.log(i);
  }

  return (
    <div style={{color:'GrayText',alignContent:'center'}}>
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
          <li key={i}>{t} <button onClick={deleteHandler.bind(null,i)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;

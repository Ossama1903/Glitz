import { useState } from "react";
import TaskList from "./components/Tasklist";
import "./styles/utility.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([
    { name: "First Task" },
    { name: "Second Task" },
  ]);

  return (
    <>
      <TaskList tasks={taskList} />
    </>
  );
}

export default App;

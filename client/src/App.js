import { useState } from "react";
import TaskList from "./components/Tasklist";
import "./styles/utility.css";
import NewTaskInput from "./components/NewTaskInput";
import { createTask } from "./api-calls/task-apis";

function App() {
  //STATE VARIABLES
  const [taskList, setTaskList] = useState([]);

  //CUSTOM FUNCTIONS
  const addTask = (passedName) => {
    createTask(passedName);
    //setTaskList([...taskList, { id: uuidv4(), name: passedName }]);
  };

  const removeTask = (passedId) => {
    const finalizedList = taskList.filter((task) => task.id !== passedId);
    setTaskList(finalizedList);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <NewTaskInput tasks={taskList} addNewTask={addTask} />
      {taskList.length === 0 && (
        <h1
          style={{
            textAlign: "center",
            color: "red",
            fontFamily: "sans-serif",
            marginTop: "2rem",
          }}
        >
          NO TASKS DUE. WOOHOO!
        </h1>
      )}
      <TaskList tasks={taskList} removeTask={removeTask} />
    </div>
  );
}

export default App;

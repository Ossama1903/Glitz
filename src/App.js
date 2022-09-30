import { useState } from "react";
import TaskList from "./components/Tasklist";
import Box from "@mui/material/Box";
import "./styles/utility.css";
import NewTaskInput from "./components/NewTaskInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  //STATE VARIABLES
  const [taskList, setTaskList] = useState([]);

  //CUSTOM FUNCTIONS
  const addTask = (passedName) => {
    setTaskList([...taskList, { id: uuidv4(), name: passedName }]);
  };

  const removeTask = (passedId) => {
    const finalizedList = taskList.filter((task) => task.id !== passedId);
    setTaskList(finalizedList);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: "10rem auto",
        }}
      >
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
            NO TASKS ADDED
          </h1>
        )}
        <TaskList tasks={taskList} removeTask={removeTask} />
      </Box>
    </>
  );
}

export default App;

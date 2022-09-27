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
        <TaskList tasks={taskList} />
      </Box>
    </>
  );
}

export default App;

import { useState } from "react";
import TaskList from "./components/Tasklist";
import Box from "@mui/material/Box";
import "./styles/utility.css";
import NewTaskInput from "./components/NewTaskInput";
// const uuidv4 = require("uuid/v4");
import { v4 as uuidv4 } from "uuid";

function App() {
  //STATE VARIABLES
  const [taskList, setTaskList] = useState([
    {
      id: uuidv4(),
      name: "First Task",
    },
    {
      id: uuidv4(),
      name: "Second Task",
    },
  ]);

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
          margin: "0 auto",
          border: "1px solid black",
        }}
      >
        <NewTaskInput addNewTask={addTask} />
        <TaskList tasks={taskList} />
      </Box>
    </>
  );
}

export default App;

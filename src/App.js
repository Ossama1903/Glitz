import { useState } from "react";
import TaskList from "./components/Tasklist";
import Box from "@mui/material/Box";
import "./styles/utility.css";
import NewTaskInput from "./components/NewTaskInput";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([
    { name: "First Task" },
    { name: "Second Task" },
  ]);

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
        <NewTaskInput />
        <TaskList tasks={taskList} />
      </Box>
    </>
  );
}

export default App;

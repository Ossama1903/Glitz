import { useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

export default function NewTaskInput({ tasks, addNewTask }) {
  const [input, setInput] = useState();
  return (
    <>
      <TextField
        style={{ marginLeft: "2rem", width: "75%" }}
        id="standard-basic"
        label="ADD TASK"
        variant="standard"
        onChange={(e) => setInput(e.target.value)}
      />
      <AddIcon
        onClick={() => addNewTask(input)}
        style={{
          fontSize: "1.9rem",
          color: "green",
          marginTop: "1.3rem",
          marginLeft: "0.8rem",
        }}
      />
    </>
  );
}

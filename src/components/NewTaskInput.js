import { useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

export default function NewTaskInput({ tasks, addNewTask }) {
  const [input, setInput] = useState();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        id="standard-basic"
        label="ADD TASK"
        variant="standard"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          addNewTask(input);
        }}
      >
        ADD TASK
      </button>
    </div>
  );
}

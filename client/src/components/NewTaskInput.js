import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function NewTaskInput({ tasks, addNewTask }) {
  const [input, setInput] = useState();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "4rem",
        padding: "1rem",
        marginBottom: "1rem",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <TextField
        id="standard-basic"
        label="ADD TASK"
        variant="standard"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{
          marginTop: "1rem",
          fontSize: "1rem",
          padding: "0.5rem",
          border: "none",
        }}
        onClick={() => {
          if (input) {
            addNewTask(input);
          }
        }}
      >
        ADD TASK
      </button>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function NewTaskInput() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "80%",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        style={{ marginLeft: "2rem" }}
        id="standard-basic"
        label="ADD TASK"
        variant="standard"
      />
    </Box>
  );
}

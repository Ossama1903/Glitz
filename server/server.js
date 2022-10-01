const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

//MIDDLE-WARES
app.use(express.json());
app.use(cors(corsOptions));

//CUSTOM-ROUTES
app.use("/api/tasks", require("./routes/task-routes"));

app.listen(5000, () => {
  console.log("SERVER STARTED");
});

const Task = require("../models/task");

const addTask = async (req, res) => {
  const { name } = req.body;
  const createdTask = new Task({ name });
  if (createdTask) {
    await createdTask.save();
    res.status(200).send("Task Created Successfully");
  } else {
    res.status(500).send("Error creating task");
  }
};

module.exports = {
  addTask,
};

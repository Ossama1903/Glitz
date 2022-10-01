const express = require("express");
const router = express.Router();
const { addTask, retrieveTasks } = require("../controllers/task-controller");

router.post("/add-task", addTask);
router.get("/retrieve-tasks", retrieveTasks);

module.exports = router;

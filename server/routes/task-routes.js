const express = require("express");
const router = express.Router();

router.post("/add-task", (req, res) => {
  console.log(req.body);
  res.json({ msg: "addTask" });
});

module.exports = router;

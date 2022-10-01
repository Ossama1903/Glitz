const addTask = (req, res) => {
  console.log(req.body);
  res.json({ msg: "addTask" });
};

module.exports = {
  addTask,
};

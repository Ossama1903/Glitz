import axios from "axios";

//GLOBAL VARIABLES
const serverURL = "http://localhost:5000";

const createTask = (name, setTaskList) => {
  var data = JSON.stringify({
    name,
  });

  var config = {
    method: "post",
    url: `${serverURL}/api/tasks/add-task`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      retrieveTasks(setTaskList);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const retrieveTasks = (setTaskList) => {
  var data = "";

  var config = {
    method: "get",
    url: `${serverURL}/api/tasks/retrieve-tasks`,
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
      setTaskList([...response.data.tasks]);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { createTask, retrieveTasks };

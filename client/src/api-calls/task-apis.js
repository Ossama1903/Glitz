import axios from "axios";

const serverURL = "http://localhost:5000";

const createTask = (name) => {
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { createTask };

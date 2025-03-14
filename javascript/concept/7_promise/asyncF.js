const createAsyncTask = () => {
    const randomV = Math.floor(Math.random() * 10);
    return new Promise((resolve) => {
      setTimeout(() => {
        if (randomV > 5) {
            // ! tweek in function
          resolve({ status: "success", value: randomV });
        } else {
          resolve({ status: "error", value: randomV });
        }
      }, randomV * 50);
    });
  };
  
  const tasks = [
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
  ];
  
  const taskRunnerI = (asyncTasks) => {
    const res = [];
    const error = [];
  
    return new Promise((resolve) => {
      let completedTasks = 0;
  
      asyncTasks.forEach((task, index) => {
        task().then((result) => {
          if (result.status === "success") {
            res[index] = result.value;
          } else {
            error[index] = result.value;
          }
  
          completedTasks++;
          if (completedTasks === asyncTasks.length) {
            resolve({ res, error });
          }
        });
      });
    });
  };
  
  (async () => {
    const r = await taskRunnerI(tasks);
    console.log(r);
  })();
  
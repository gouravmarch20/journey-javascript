const createAsyncTask = () => {
    const randomV = Math.floor(Math.random() * 10);
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (randomV > 5) {
          res(randomV);
        } else {
          rej(randomV);
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
    let completedTasks = 0; // Track completed tasks
  
    return new Promise((resolve, reject) => {
      asyncTasks.forEach((task, index) => {
        // ! m1 :: no need to make promise --> it all promsie just need to call function it return promise
        task() // Call the function to execute the promise
          .then((v) => {
            res[index] = v;
          })
          .catch((err) => {
            error[index] = err;
          })
          .finally(() => {
            completedTasks++;
            if (completedTasks === asyncTasks.length) {
              if (error.length > 0) {
                reject({ res, error });
              } else {
                resolve({ res, error });
              }
            }
          });
      });
    });
  };
  
  (async () => {
    try {
      const r = await taskRunnerI(tasks);
      console.log("Success:", r);
    } catch (err) {
      console.log("Error:", err);
    }
  })();
  
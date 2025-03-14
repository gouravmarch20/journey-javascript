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
  
  const taskRunnerI = (asyncTaskFns) => {
    const res = [];
    const error = [];
  //! m1 :: invoke function 
    return Promise.allSettled(asyncTaskFns.map((task) => task())).then((results) => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          res[index] = result.value;
        } else {
          error[index] = result.reason;
        }
      });
      return { res, error };
    });
  };
  
  (async () => {
    try {
      const r = await taskRunnerI(tasks);
      console.log(r);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  })();
  
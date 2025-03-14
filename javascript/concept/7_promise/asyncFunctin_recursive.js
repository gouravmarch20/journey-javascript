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

const task = [
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
];

const taskRunnerI = async (asyncTasks, cb) => {
  const result = [];
  const error = [];
  let prt = 0;
  const helper = (prt) => {
    if (prt == asyncTasks.length) {
      cb({ result, error });
      return;
    }
    asyncTasks[prt]()
      .then((n) => {
        result.push(n);
      })
      .catch((e) => {
        error.push(e); // Fix: push errors into `error` array

      })
      .finally(() => {
        helper(++prt);
      });
  };
  helper(prt)
};

const r = await taskRunnerI(task, (res) => {
  console.log(res);
});
// console.log(r);

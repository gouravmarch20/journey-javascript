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
const taskRunnerI = async (asyncTasks) => {
  const result = [];
  const error = [];
  for (const task of asyncTasks) {
    try {
      const successTask = await task();
      result.push(successTask);
    } catch (err) {
      error.push(err);
    }
  }
  return {
    result,
    error,
  };
};

const r = await taskRunnerI(task);
console.log(r);

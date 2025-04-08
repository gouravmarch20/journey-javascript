const syncExecutor = function (promises) {
  const res = [];
  const error = [];
  //   let i = 0;
  function recHelper(i = 0) {
    if (i == promises.length) {
      return { res, error };
    }
    promises[i]
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        recHelper(i + 1);
      });
  }
  recHelper();
};

const asyncTask = function (i) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const promises = [
  asyncTask(4),
  asyncTask(7),
  asyncTask(2),
  asyncTask(2),
  asyncTask(5),
];

syncExecutor(promises);

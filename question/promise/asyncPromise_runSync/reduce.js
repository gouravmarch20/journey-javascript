const syncExecutor = function (promises) {
  return promises.reduce((acc, curr) => {
    // *  ensuring curr only executes after acc completes

    return acc
      .then(() => {
        return curr;
      })
      .then((val) => {
        console.log(val);
      });
  }, Promise.resolve());
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

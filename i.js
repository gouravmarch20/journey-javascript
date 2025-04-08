const asyncSeriesExecuter = function (promises) {
  promises.reduce((acc, curr) => {
    // return acc.then(() => {
      curr.then((val) => {
        console.log(val);
      });
    // });
  }, Promise.resolve());
};
const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const promises = [
  asyncTask(4),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];
asyncSeriesExecuter(promises);

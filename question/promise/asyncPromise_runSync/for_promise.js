const syncExecutor = function (promises) {
  let chain = Promise.resolve();

  for (let i = 0; i < promises.length; i++) {
    chain = chain
      .then(() => promises[i])
      .then((val) => {
        console.log("--", val);
      });
  }

  return chain;
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

console.log("--");
setTimeout(() => {
  console.log("---");
}, 2000);

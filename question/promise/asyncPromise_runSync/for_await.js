//NOTE: ASYNC QUEUE TILL NOT END NEXT CAN NOT RUN 
const syncExecutor = async function (promises, type) {
  for (let i = 0; i < promises.length; i++) {
    const val = await promises[i];
    console.log(val);
  }
};

const asyncTask = function (i) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Completing ${i} `), 100 * i);
  });
};

const promises = [
  asyncTask(4),
  asyncTask(7),
  asyncTask(2),
  //   asyncTask(2),
  //   asyncTask(5),
];

syncExecutor(promises);
console.log("--");
setTimeout(() => {
  console.log("---");
}, 1000);
const promises1 = [asyncTask(2)];

syncExecutor(promises1);

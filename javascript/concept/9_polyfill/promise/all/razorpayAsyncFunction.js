const wrapTimeout = (id, delay, message) => {
  return new Promise((resolve) => {
    let timer = setTimeout(() => {
      console.log(message);
      resolve(`Timer ID: ${timer}`);
    }, delay);
  });
};

// Wrap setTimeout calls inside Promises
const promise1 = wrapTimeout(1, 100, "pr_1");
const promise3 = wrapTimeout(3, 3500, "pr_3");
const promise = wrapTimeout(2, 3000, "pr");

const promise2 = new Promise((resolve) => {
  let timer = setTimeout(() => resolve(`Timer ID: ${timer}`), 250);
  console.log("pr_2");
});

const asyncFunctions = [promise, promise1, promise2, promise3];

const convertToPromise = (value, index) => {
  if (value instanceof Promise) {
    return value; // If already a Promise, return as is
  }
  return Promise.resolve(`promise ${index + 1} executed`);
};

const runSequentially = async (functions) => {
  const results = [];
  for (let i = 0; i < functions.length; i++) {
    const result = await convertToPromise(functions[i], i);
    console.log("completed", i);
    results.push(result);
  }
  return results;
};

// Execute and log
runSequentially(asyncFunctions).then(console.log);

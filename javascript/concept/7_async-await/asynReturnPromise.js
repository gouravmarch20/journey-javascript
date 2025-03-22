const promise = Promise.resolve("I am resolved");
const promise1 = Promise.reject("--reject");

// fat arrow
const example = async (promise) => {
  // promise is wrapped in a try-catch block
  // to handle it better
  try {
    const resp = await promise1;
    return resp;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Task done");
  }
};

console.log(example(promise));
// Promise { : "fulfilled", : "I am resolved" }
// "Task done"

example(promise)
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.error(error);
  });

// "Task done"
// "I am resolved"

// implement a pipe-line based JS function. And extented to a asyc-limit question.
// ChatGPT said:
// Sure! Let's first implement a simple pipeline function in JavaScript. A pipeline is essentially a series of functions where the output of one function becomes the input of the next function.

// Here's a basic synchronous pipeline implementation:

// 1. Basic Synchronous Pipeline in JavaScript
// javascript
// Copy
// function pipeline(...functions) {
//   return function(initialValue) {
//     return functions.reduce((acc, fn) => fn(acc), initialValue);
//   };
// }

// // Example usage:
// const add1 = (x) => x + 1;
// const multiplyBy2 = (x) => x * 2;
// const subtract3 = (x) => x - 3;

// const myPipeline = pipeline(add1, multiplyBy2, subtract3);

// console.log(myPipeline(4)); // (4 + 1) * 2 - 3 = 6
// In this example:

// pipeline is a function that accepts a list of functions.
// It returns a new function that, when called, will execute the functions in sequence.
// 2. Extending to an Async-Limited Pipeline
// Next, we'll extend this to support asynchronous functions and a limit on how many asynchronous tasks can run concurrently.

// To handle async operations, we will use async/await and a simple concurrency limiter.

// Here's the implementation:

// javascript
// Copy
// async function pipelineAsyncLimit(limit, ...functions) {
//   const queue = [...functions];
//   const results = [];
//   let activeCount = 0;

//   async function runTask(fn, input) {
//     activeCount++;
//     const result = await fn(input);
//     activeCount--;
//     results.push(result);
//   }

//   return async function(initialValue) {
//     let currentValue = initialValue;

//     while (queue.length > 0 || activeCount > 0) {
//       // Run the next task in the queue if we're under the limit
//       while (queue.length > 0 && activeCount < limit) {
//         const nextFn = queue.shift();
//         runTask(nextFn, currentValue).then((result) => {
//           currentValue = result; // Update current value after the task finishes
//         });
//       }

//       // Wait for some task to finish
//       await new Promise(resolve => {
//         const interval = setInterval(() => {
//           if (activeCount === 0 || queue.length === 0) {
//             clearInterval(interval);
//             resolve();
//           }
//         }, 10);
//       });
//     }

//     return results;
//   };
// }

// // Example usage:
// const add1 = async (x) => x + 1;
// const multiplyBy2 = async (x) => x * 2;
// const subtract3 = async (x) => x - 3;
// const divideBy2 = async (x) => x / 2;

// const myPipelineAsync = pipelineAsyncLimit(2, add1, multiplyBy2, subtract3, divideBy2);

// myPipelineAsync(5).then((results) => {
//   console.log(results); // [ Result of each step ]
// });
// Explanation of Async Limitations:
// Limit on concurrency: The limit parameter defines how many tasks can run concurrently.
// Asynchronous tasks: Each function in the pipeline returns a promise, and we use async/await to handle these promises.
// Queue and active tasks: We keep track of the active tasks and the tasks left in the queue. When the number of active tasks is less than the limit, we start a new task.
// Waiting for tasks: We use an interval to periodically check if tasks have finished and ensure that the pipeline doesn't run out of tasks prematurely.

// maximum weight carrying problem.
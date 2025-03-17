// ✅ Custom Promise.any() Polyfill
function myPromiseAny(taskList) {
  let rejectionCount = 0;
  const errors = [];

  return new Promise((resolve, reject) => {
    if (taskList.length === 0) {
      // Reject immediately if no promises are provided
      return reject(new AggregateError([], "All promises were rejected"));
    }

    taskList.forEach((task, index) => {
      Promise.resolve(task)
        .then(resolve) // ✅ Resolve if any promise fulfills
        .catch((error) => {
          errors[index] = error;
          rejectionCount++;

          if (rejectionCount === taskList.length) {
            // ❌ Reject if all promises are rejected
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

// ✅ Test Case 1: At least one promise resolves
const successTasks = [
  new Promise((_, reject) => setTimeout(() => reject("Error 1"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2"), 1000)), // ✅ Should win
  new Promise((_, reject) => setTimeout(() => reject("Error 3"), 200)),
];

myPromiseAny(successTasks)
  .then((result) => console.log("✅ Resolved:", result)) // Expected: "Task 2"
  .catch((error) => console.error("❌ Rejected:", error));

// ✅ Test Case 2: All promises reject (should return AggregateError)
const failureTasks = [
  new Promise((_, reject) => setTimeout(() => reject("Error A"), 300)),
  new Promise((_, reject) => setTimeout(() => reject("Error B"), 600)),
  new Promise((_, reject) => setTimeout(() => reject("Error C"), 900)),
];

myPromiseAny(failureTasks)
  .then((result) => console.log("✅ Resolved:", result))
  .catch((error) => {
    // console.error("❌ Rejected:", error.message); // Expected: "All promises were rejected"
    // console.error("🛑 Errors:", error.errors); // Array of individual errors
  });

// ✅ Test Case 3: Empty array (should reject immediately)
myPromiseAny([])
  .then((result) => console.log("✅ Resolved:", result))
  .catch((error) => console.error("❌ Rejected (Empty):", error.message));

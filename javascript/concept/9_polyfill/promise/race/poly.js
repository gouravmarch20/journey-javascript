// Custom Promise.race() implementation
function myPromiseRace(taskList) {
  return new Promise((resolve, reject) => {
    for (const task of taskList) {
      Promise.resolve(task)
        .then(resolve) // Resolve as soon as the first promise resolves
        .catch(reject); // Reject as soon as the first promise rejects
    }
  });
}

// ✅ Test Case 1: First resolved promise wins
const successRaceTasks = [
  new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
];

myPromiseRace(successRaceTasks)
  .then((result) => console.log("✅ Resolved:", result)) // Expected: "Task 3"
  .catch((error) => console.error("❌ Rejected:", error));

// ✅ Test Case 2: First rejected promise wins
const errorRaceTasks = [
  new Promise((_, reject) => setTimeout(() => reject("Error 1"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2"), 1000)),
  new Promise((_, reject) => setTimeout(() => reject("Error 2"), 200)),
];

myPromiseRace(errorRaceTasks)
  .then((result) => console.log("✅ Resolved:", result))
  .catch((error) => console.error("❌ Rejected:", error)); // Expected: "Error 2"

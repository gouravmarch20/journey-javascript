function resolvePromisesWithPriority(promises) {
  // Sort by priority (lower number = higher priority)
  promises.sort((a, b) => a.priority - b.priority);
  console.log(
    "Sorted promises by priority:",
    promises.map((p) => p.priority)
  );

  let resolved = false; // Flag to stop further handling after first success

  return new Promise((resolve, reject) => {
    let failures = new Set();

    promises.forEach(({ task, priority }) => {
      if (resolved) return; // Ignore tasks if already resolved

      task()
        .then((value) => {
          if (!resolved) {
            resolved = true;
            console.log(
              `✅ Success: Task with priority ${priority} resolved with value: ${value}`
            );
            resolve(value);
          }
        })
        .catch(() => {
          if (!resolved) {
            console.log(`❌ Failure: Task with priority ${priority} rejected`);
            failures.add(priority);

            if (failures.size === promises.length) {
              console.log("🚨 All promises failed. Rejecting...");
              reject("All APIs Failed");
            }
          }
        })
        .finally(() => {
          console.log(
            `##__  ${priority} __####`
          );
        });
    });
  });
}

// Creates an async task that randomly resolves or rejects
function createAsyncTask(priority, ansToReturn) {
  const value = Math.floor(Math.random() * 100);
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value % 2 === 0) {
          console.log(`✅ Task with priority ${priority} will RESOLVE`);
          resolve(`${ansToReturn} --- ${value}`);
        } else {
          console.log(`❌ Task with priority ${priority} will REJECT`);
          reject();
        }
      }, Math.random() * 2000); // Random delay for async behavior
    });
}

// Define a list of promises with different priorities
const promises = [
  { task: createAsyncTask(1, "g_1"), priority: 1 },
  { task: createAsyncTask(3, "g_3"), priority: 3 },
  { task: createAsyncTask(2, "g_2"), priority: 2 },
  { task: createAsyncTask(4, "g_4"), priority: 4 },
];

// Call the function and log the result
resolvePromisesWithPriority(promises)
  .then((result) => {
    console.log("🎉 Final Resolved Value:", result);
  })
  .catch((error) => {
    console.log("❌ Final Error:", error);
  });

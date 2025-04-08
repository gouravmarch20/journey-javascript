async function resolvePromisesWithPriority(promises) {
    // Sort promises by priority (ascending order)
    promises.sort((a, b) => a.priority - b.priority);
    console.log("Sorted promises by priority:", promises.map(p => p.priority));
  
    // Try each promise one by one
    for (let i = 0; i < promises.length; i++) {
      const { task, priority } = promises[i];
  
      try {
        console.log(`🔹 Executing task with priority ${priority}`);
        const result = await task(); // Wait for this task to complete
        console.log(`✅ Success: Task with priority ${priority} resolved with value: ${result}`);
        return result; // Stop and return on first success
      } catch {
        console.log(`❌ Failure: Task with priority ${priority} rejected`);
      }
    }
  
    // If all promises fail, reject
    console.log("🚨 All promises failed. Rejecting...");
    throw new Error("All APIs Failed");
  }
  
  // Creates an async task that randomly resolves or rejects
  function createAsyncTask(priority, ansToReturn) {
    const value = Math.floor(Math.random() * 100);
    return () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`🔹 Executing task with priority ${priority}, value: ${value}`);
          if (value % 2 === 0) {
            console.log(`✅ Task with priority ${priority} will RESOLVE`);
            resolve(`${ansToReturn} --- ${value}`);
          } else {
            console.log(`❌ Task with priority ${priority} will REJECT`);
            reject();
          }
        }, 1000);
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
      console.log("❌ Final Error:", error.message);
    });
  
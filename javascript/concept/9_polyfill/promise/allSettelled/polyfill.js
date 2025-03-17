// ✅ Custom Promise.allSettled() Polyfill
function myPromiseAllSettled(taskList) {
    const result = new Array(taskList.length);
    let completed = 0;
  
    return new Promise((resolve) => {
      if (taskList.length === 0) {
        return resolve([]); // ✅ Handle empty input
      }
  
      taskList.forEach((task, index) => {
        Promise.resolve(task)
          .then((value) => {
            result[index] = { status: "fulfilled", value };
          })
          .catch((reason) => {
            result[index] = { status: "rejected", reason };
          })
          .finally(() => {
            completed++;
            if (completed === taskList.length) {
              resolve(result); // ✅ Resolve when all promises settle
            }
          });
      });
    });
  }
  
  // ✅ Test Case 1: Mixed Resolved & Rejected Promises
  const mixedTasks = [
    new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
    new Promise((_, reject) => setTimeout(() => reject("Error 2"), 500)),
    new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
  ];
  
  myPromiseAllSettled(mixedTasks).then((result) => {
    console.log("✅ Mixed Tasks Result:", result);
    /*
      Expected Output:
      [
        { status: "fulfilled", value: "Task 1" },
        { status: "rejected", reason: "Error 2" },
        { status: "fulfilled", value: "Task 3" }
      ]
    */
  });
  
  // ✅ Test Case 2: All Resolved Promises
  const allResolvedTasks = [
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C"),
  ];
  
  myPromiseAllSettled(allResolvedTasks).then((result) => {
    console.log("✅ All Resolved Result:", result);
    /*
      Expected Output:
      [
        { status: "fulfilled", value: "A" },
        { status: "fulfilled", value: "B" },
        { status: "fulfilled", value: "C" }
      ]
    */
  });
  
  // ✅ Test Case 3: All Rejected Promises
  const allRejectedTasks = [
    Promise.reject("X"),
    Promise.reject("Y"),
    Promise.reject("Z"),
  ];
  
  myPromiseAllSettled(allRejectedTasks).then((result) => {
    console.log("✅ All Rejected Result:", result);
    /*
      Expected Output:
      [
        { status: "rejected", reason: "X" },
        { status: "rejected", reason: "Y" },
        { status: "rejected", reason: "Z" }
      ]
    */
  });
  
  // ✅ Test Case 4: Empty Input (Edge Case)
  myPromiseAllSettled([]).then((result) => {
    console.log("✅ Empty Input Result:", result); // Expected Output: []
  });
  
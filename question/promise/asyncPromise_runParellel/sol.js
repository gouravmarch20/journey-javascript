const asyncTask = function (i) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Completing ${i}`), 100 * i);
    });
  };
  
  function runInParallel(promises) {
    const results = [];
    let completed = 0; // Track completed promises
  
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((val) => {
        results[i] = val; // Store results in the correct order
        completed++;
  
        if (completed === promises.length) {
          console.log(results); // Print when all are done
        }
      });
    }
  }
  
  const tasks = [
    asyncTask(3),
    asyncTask(7),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
  ];
  
  runInParallel(tasks);
  
function createTask(dependencies, job , name) {
  // Ensure dependencies are promises --> if not promise make them
  const dependencyPromises = dependencies.map((dep) =>
    dep instanceof Promise
      ? dep
      : Promise.resolve(() => {
          dep();
        })
  );
//   console.log(dependencyPromises);

  return new Promise((resolve) => {
    // Wait for all dependencies to resolve
    console.log("--PPPP" , Promise.all(dependencyPromises));

    Promise.all(dependencyPromises).then(() => {
      console.log("----- all depency for  " , name , " resolved");
      job(resolve);
    });
  });
}

// Example Usage:
const processA = createTask(
  [],
  (done) => {
    setTimeout(() => {
      console.log("Process A completed");
      done();
    }, 1000);
  },
  "processA"
);

const processB = createTask(
  [processA],
  (done) => {
    setTimeout(() => {
      console.log("Process B completed");
      done();
    }, 2000);
  },
  "processB"
);
const processC = createTask(
  [processA],
  (done) => {
    setTimeout(() => {
      console.log("Process C completed");
      done();
    }, 500);
  },
  "processC"
);

const processD = createTask(
  [processA, processB, processC],
  (done) => {
    setTimeout(() => {
      console.log("Process D completed ");
      done();
    }, 100);
  },
  "processD"
);

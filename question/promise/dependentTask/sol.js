class Task {
  /**
   * Initializes a new Task instance.
   * @param {Task[]} dependencies - List of dependent tasks.
   * @param {Function} job - The function to execute for this task.
   */
  constructor(dependencies = [], job) {
    // Filter dependencies that are still incomplete
    this.dependencies = dependencies
      ? dependencies.filter(
          (dependency) => dependency instanceof Task && !dependency.isCompleted
        )
      : [];
      console.log("dependencies_99" ,  this.dependencies )

    // Track the number of dependencies that need to complete
    this.currentDependencyCount = this.dependencies.length;

    // The function (job) to execute when dependencies are done
    this.job = job;

    // Mark the task as incomplete initially
    this.isCompleted = false;

    // List of subscribed callbacks to trigger once this task is done
    this.subscribedList = [];

    // Start the process
    this.processJob();
  }

  /**
   * Starts processing the task.
   * If dependencies exist, subscribe to their completion.
   * Otherwise, execute the job immediately.
   */
  processJob() {
    if (this.dependencies.length > 0) {
      // Subscribe to each dependency's completion
      for (let dependency of this.dependencies) {
        dependency.subscribe(this.trackDependency.bind(this));
      }
    } else {
      // No dependencies, execute the task immediately
      this.job(this.done.bind(this));
    }
  }

  /**
   * Called when a dependent task is completed.
   * Decrements the count of remaining dependencies.
   * If all dependencies are completed, executes the job.
   */
  trackDependency() {
    this.currentDependencyCount--;

    // If all dependencies have completed, execute the job
    if (this.currentDependencyCount === 0) {
      this.job(this.done.bind(this));
    }
  }

  /**
   * Allows other tasks to subscribe to this task's completion.
   * @param {Function} cb - Callback function to be executed when this task completes.
   */
  subscribe(cb) {
    this.subscribedList.push(cb);
  }

  /**
   * Marks the task as complete.
   * Notifies all subscribed tasks that this task has completed.
   */
  done() {
    this.isCompleted = true;

    // Notify all dependent tasks
    for (const callback of this.subscribedList) {
      callback();
    }
  }
}

// Test Cases
const processA = new Task(null, (done) => {
  setTimeout(() => {
    console.log("Process A_" , done);
    done();
  }, 100);
});

// const processB = new Task([processA], (done) => {
//   setTimeout(() => {
//     console.log("Process B");
//     done();
//   }, 1500);
// });

// const processC = new Task(null, (done) => {
//   setTimeout(() => {
//     console.log("Process C");
//     done();
//   }, 1000);
// });

// const processD = new Task([processA, processB], (done) => {
//   setTimeout(() => {
//     console.log("Process D");
//     done();
//   }, 1000);
// });

// const processE = new Task([processC, processD], (done) => {
//   setTimeout(() => {
//     console.log("Process E");
//     done();
//   }, 100);
// });

// Create a final task that depends on all previous tasks
// const createAllDoneInstance = (allDoneCallback) =>
//   new Task([processA, processB, processC, processD, processE], allDoneCallback);

// createAllDoneInstance(() => {
//   console.log("All is done!");
// });

// Expected Output:
// "Process A"
// "Process C"
// "Process B"
// "Process D"
// "Process E"
// "All is done!"

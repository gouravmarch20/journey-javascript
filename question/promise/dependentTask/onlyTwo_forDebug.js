class Task {
  /**
   * Initializes a new Task instance.
   * @param {Task[]} inputDependencies - List of dependent tasks.
   * @param {Function} job - The function to execute for this task.
   */
  constructor(inputDependencies = [], job) {
    console.log("many_cany", inputDependencies);

    // Filter dependencies that are still incomplete
    this.dependencies = inputDependencies
      ? inputDependencies.filter(
          (dependency) => dependency instanceof Task && !dependency.isCompleted
        )
      : [];

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


const processB = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Process B completed");
    resolve(); // Resolve the promise after 2 seconds
  }, 2000);
});
const processA = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Process A completed");
    resolve(); // Resolve the promise after 2 seconds
  }, 3000);
});

const processC = new Task([processB, processA], (done) => {
  setTimeout(() => {
    console.log("Process C");
    done();
  }, 100);
});

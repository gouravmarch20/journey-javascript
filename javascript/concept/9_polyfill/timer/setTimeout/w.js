const MY_TIMER = {
  queue: [],
  timerId: 1,

  coustomSetTimeout: function (cb, time, ...args) {
    const id = this.timerId++;
    this.queue.push({
      id,
      time: Date.now() + time,
      cb,
      args,
    });

    this.queue.sort((a, b) => a.time - b.time); // Sort by execution time

    if (this.queue.length === 1) {
      this.run(); // Start the execution loop only if it's the first task
    }

    return id;
  },

  clearTimeout: function (removeId) {
    this.queue = this.queue.filter(({ id }) => id !== removeId);
  },

  run: async function () {
    while (true) {
      const entry = this.queue.shift();
      const { id, time, cb, args } = entry;
      // If time has passed
      if (Date.now() >= time) {
        cb(...args);
      } else {
        // Else push it back into the queue
        this.queue.unshift(entry);
      }
      // If there are no further entries
      // break the loop
      if (this.queue.length === 0) {
        break;
      }
    }
  },
};

// ✅ **Test Case**
MY_TIMER.coustomSetTimeout(() => {
  console.log(1);
}, 1000);

MY_TIMER.coustomSetTimeout(() => {
  console.log(2);
}, 2000);

MY_TIMER.coustomSetTimeout(() => {
  console.log(3);
}, 3000);
console.log("4===");

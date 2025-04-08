function retryPromise(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      fn()
        .then((res) => resolve(res))
        .catch((error) => {
          if (n <= 1) {
            reject(error); // Reject if no retries left
          } else {
            setTimeout(() => attempt(n - 1), delay); // Retry after a delay
          }
        });
    };

    attempt(retries); // Start the first attempt
  });
}

// Example Usage:
const unreliableFunction = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7; // 30% chance of success
    console.log("the_mock", success);
    success ? resolve("Success!") : reject("Failed!");
  });
};

retryPromise(unreliableFunction, 3, 1000)
  .then((result) => console.log("Resolved:", result))
  .catch((error) => console.error("Rejected:", error));

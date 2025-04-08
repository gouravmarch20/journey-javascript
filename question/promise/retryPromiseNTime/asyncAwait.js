async function retryPromise(fn, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
      try {
        console.log("--" )
        return await fn();
      } catch (error) {
        if (i === retries - 1) throw error; // Reject if it's the last attempt
        await new Promise((res) => setTimeout(res, delay)); // Wait before retrying
      }
    }
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
  
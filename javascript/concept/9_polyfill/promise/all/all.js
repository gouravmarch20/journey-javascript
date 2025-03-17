// Simulate an API hit
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const data = { message: "Data fetched from API" };
          resolve(data);
      }, 1000);
  });
}

// Static promise
function staticPromise() {
  return Promise.resolve("Static data");
}

// Custom promise
function customPromise() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const randomNumber = Math.random();
          if (randomNumber > 0.5) {
              resolve(`Custom promise resolved with ${randomNumber}`);
          } else {
              reject(`Custom promise rejected with ${randomNumber}`);
          }
      }, 1500);
  });
}

// setTimeout-based promise
function timeoutPromise() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Timeout completed");
      }, 2000);
  });
}

// Async function to handle all promises
async function handleAllPromises() {
  try {
      const results = await Promise.all([
          fetchDataFromAPI(),
          staticPromise(),
          customPromise(),
          timeoutPromise(),
      ]);

      console.log("All promises resolved successfully:");
      results.forEach((result, index) => {
          console.log(`Promise ${index + 1}:`, result);
      });
  } catch (error) {
      console.error("One of the promises rejected:", error);
  }
}

// Call the async function
handleAllPromises();
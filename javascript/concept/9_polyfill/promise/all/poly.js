
Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let results = new Array(values.length);
    let isRejected = false; // Track if rejection happened

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          if (isRejected) return; // Ignore further execution if already rejected
          results[index] = result;
          completed++;
          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          if (!isRejected) {
            isRejected = true; // Mark as rejected
            reject(err);
          }
        });
    });
  });
};


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
  
      resolve(`Custom promise resolved with ${randomNumber}`);
  
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

Promise.myAll([
  fetchDataFromAPI(),
  staticPromise(),
  customPromise(),
  timeoutPromise(),
])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));

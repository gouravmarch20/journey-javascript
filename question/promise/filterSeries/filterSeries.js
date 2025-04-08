const filter = (arr, fn) => {
  return new Promise((resolve, reject) => {
    const output = [];
    let track = 0;
    let hasError = false;

    arr.forEach((e, i) => {
      fn(e, (error, result) => {
        if (hasError) return; // Prevent further execution if error occurs

        if (error) {
          hasError = true; // Stop further execution
          return reject(error);
        }

        track++;

        if (result) {
          output.push(e); // Use push instead of assigning by index
        }

        if (track === arr.length) {
          resolve(output);
        }
      });
    });
  });
};

// Test Case
let numPromise = filter([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(() => {
    num = num + 2;
    console.log(num);

    if (num === 7) {
      callback(true); // Pass error
    } else {
      callback(null, num !== 4);
    }
  }, 2000);
});

numPromise
  .then((result) => console.log("Filtered Output:", result))
  .catch((error) => console.error("Error:", error));

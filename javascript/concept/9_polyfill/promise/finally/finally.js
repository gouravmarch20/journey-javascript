// Check if 'myFinally' already exists to avoid overwriting built-in functionality.
if (!Promise.prototype.myFinally) {
  Promise.prototype.myFinally = function (callback) {
    // 'this' refers to the current promise (either resolved or rejected).
    console.log(this, typeof this);
    return this.then(
      // ✅ If the promise is RESOLVED:
      (value) =>
        // Run 'callback()', ensuring it completes before returning 'value'.
        Promise.resolve(callback()).then(() => value),

      // ❌ If the promise is REJECTED:
      (reason) =>
        // Run 'callback()', ensuring it completes before rethrowing 'reason'.
        Promise.resolve(callback()).then(() => {
          throw reason; // Preserve original rejection.
        })
    );
  };
}

Promise.resolve("Success")
  .then((res) => console.log("Result:", res))
  .myFinally(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          console.log("Async Cleanup");
          resolve();
        }, 1000)
      )
  );
// Promise.reject("Error")
//   .myFinally(
//     () =>
//       new Promise((resolve) =>
//         setTimeout(() => {
//           console.log("Async Cleanup");
//           resolve();
//         }, 1000)
//       )
//   )
//   .catch((err) => console.error("Caught:", err));

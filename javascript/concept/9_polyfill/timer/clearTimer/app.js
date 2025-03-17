// ✅ IIFE to override setTimeout and define clearAllTimeout
(function () {
  let timeouts = []; // Array to track timeout IDs

  // Store the original setTimeout function
  const originalSetTimeout = window.setTimeout;
  const originalClearTimeout = window.clearTimeout;

  // Override setTimeout
  window.setTimeout = function (callback, delay, ...args) {
    const timeoutId = originalSetTimeout(callback, delay, ...args);
    timeouts.push(timeoutId); // Store timeout ID
    return timeoutId;
  };

  // Define clearAllTimeout to clear all stored timeouts
  window.clearAllTimeout = function () {
    timeouts.forEach((timeoutId) => {
      originalClearTimeout(timeoutId); // Clear each timeout
    });
    timeouts = []; // Reset the array
  };
})();
// ✅ Test Case: Setting multiple timeouts
const timeout1 = setTimeout(() => console.log("⏳ Timeout 1"), 8000);
const timeout2 = setTimeout(() => console.log("⏳ Timeout 2"), 3000);
const timeout3 = setTimeout(() => console.log("⏳ Timeout 3"), 4000);

setTimeout(() => {
  console.log("🚨 Clearing all timeouts...");
  clearAllTimeout(); // ✅ This should cancel all pending timeouts
}, 5000);

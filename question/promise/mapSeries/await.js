async function mapSeriesForLoop(arr, fn) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    // Wait for the async function to resolve before moving on
    const result = await fn(arr[i]);
    console.log(`Iteration ${i} - Result:`, result);
    results.push(result);
  }
  return results;
}

// Example async function
const asyncTask = (num) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 1000);
  });

// Usage
mapSeriesForLoop([2, 3, 4], asyncTask).then((finalResult) =>
  console.log("Final Result (for loop):", finalResult)
);

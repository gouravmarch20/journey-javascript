const mapSeries = (arr, fn) => {
    return arr.reduce((acc, current, index) => {
        console.log(`Iteration ${index} - Accumulator:`, acc, current);
        
        return acc.then(results => {
            return fn(current)
                .then(result => {
                    console.log(`Iteration ${index} - Result:`, result);
                    return [...results, result];
                })
                .catch(error => {
                    console.error(`Iteration ${index} - Error:`, error);
                    // throw error?.message; // Ensure the error propagates to the final .catch()
                });
        });
    }, Promise.resolve([]));
};

// Example async function that doubles the input after 1 second.
// For demonstration, it rejects when the number is 3.
const asyncTask = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num === 3) {
                reject(new Error("Error processing number 3"));
            } else {
                resolve(num * 2);
            }
        }, 1000);
    });
};

// Invoke mapSeries on an array with the asyncTask.
mapSeries([2, 3, 4], asyncTask)
    .then(finalResult => {
        console.log("Final Result:", finalResult);
    })
    .catch(error => {
        console.error("Error encountered:", error);
    })
    .finally(() => {
        console.log("Processing complete.");
    });

// * --> push arg ... to add item
// Store the original push method
const originalPush = Array.prototype.push;

// Override the push method
Array.prototype.myPush = function (...args) {
    // Call the original push method
    const result = originalPush.apply(this, args);

    // If a push callback is defined, execute it with the pushed items
    if (typeof this.onPush === 'function') {
        this.onPush(args);
    }

    return result;
};

// Method to set a callback function for push event
Array.prototype.setPushCb = function (callback) {
    if (typeof callback === 'function') {
        this.onPush = callback; // Store the callback function on the array
    } else {
        throw new TypeError('Callback must be a function');
    }
};

// Test Cases
console.log("Running Test Cases...");

// Create an empty array
const arr = [];

// Set a callback function for push event
arr.setPushCb((items) => {
    console.log('Items pushed:', items);
});

// Push elements and observe callback execution
arr.myPush(1);       // Expected Output: Items pushed: [1]
arr.myPush(2, 3);    // Expected Output: Items pushed: [2, 3]
arr.myPush(4, 5, 6); // Expected Output: Items pushed: [4, 5, 6]

// Validate if the elements are correctly added to the array
console.log(arr);  // Expected Output: [1, 2, 3, 4, 5, 6]

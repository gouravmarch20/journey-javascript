function mostRepeatedCharacter(arr) {
    // Create a Map to store the count of each element
    let count = new Map();
    
    // Count the occurrences of each element in the array
    arr.forEach(function(element) {
        count.set(element, (count.get(element) || 0) + 1);
    });

    // Find the maximum occurrence
    let maxOccurrence = Math.max(...count.values());

    // Get the most repeated element(s)
    let mostRepeated = [];
    count.forEach(function(value, key) {
        if (value === maxOccurrence) {
            mostRepeated.push(key);
        }
    });

    // Print the result
    mostRepeated.forEach(function(char) {
        console.log(`${char} occurs ${maxOccurrence} times`);
    });
}

// Example array
let inputArray = [1, 1, 3, 1, 2];

// Call the function with the example array
mostRepeatedCharacter(inputArray);

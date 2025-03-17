function groupBy(collection, property) {
    // Ensure the collection is an array or object
    if (!Array.isArray(collection) || collection === null) {
        return {};
    }

    // Helper function to get key
    const getKey = (item) => {
        if (typeof property === 'function') {
            return property(item);
        } else if (typeof property === 'string') {
            // Resolve deep property paths (e.g., "p.q.r")
            return property.split('.').reduce((obj, key) => obj?.[key], item);
        }
    };

    // Initialize the output object
    const output = {};

    // Iterate through the collection and group items by key
    for (const item of collection) {
        const key = getKey(item);
        
        // Handle missing key case (avoid undefined keys)
        if (key === undefined) continue;

        if (!output[key]) {
            output[key] = [];
        }
        output[key].push(item);
    }

    return output;
}

// Test Cases
console.log(groupBy(1)); // {}
console.log(groupBy([6.1, 2.4, 2.7, 6.8], Math.floor)); 
// { "2": [2.4, 2.7], "6": [6.1, 6.8] }

console.log(groupBy(["one", "two", "three"], "length")); 
// { "3": ["one", "two"], "5": ["three"] }

console.log(groupBy([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }], "a.b.c")); 
// { "1": [{ a: { b: { c: 1 } } }], "2": [{ a: { b: { c: 2 } } }] }

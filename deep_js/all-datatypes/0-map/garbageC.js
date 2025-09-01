// preventClosureMemoryLeak.js

function preventClosureMemoryLeak() {
    let weakMap = new WeakMap();
    let keyStore = new Map(); // Store object keys for retrieval

    return {
        set(key, value) {
            let objKey = { key }; // Create a unique object as a key
            weakMap.set(objKey, value);
            keyStore.set(key, objKey); // Store reference to find it later
        },
        get(key) {
            let objKey = keyStore.get(key);
            return objKey ? weakMap.get(objKey) : undefined;
        }
    };
}

// Example Usage
const cache = preventClosureMemoryLeak();

// Store objects
cache.set('user1', { name: 'Alice' });
cache.set('user2', { name: 'Bob' });

// Retrieve objects
console.log(cache.get('user1')); // { name: 'Alice' }
console.log(cache.get('user2')); // { name: 'Bob' }

// Remove reference
cache.set('user1', null);

// Attempt to retrieve after garbage collection (will be undefined when GC runs)
setTimeout(() => {
    console.log(cache.get('user1')); // undefined (if GC has run)
}, 5000);

module.exports = preventClosureMemoryLeak;

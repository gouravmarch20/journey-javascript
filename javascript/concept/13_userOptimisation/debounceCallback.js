export function debouncedSearch(query, delay, searchFn) {
    if (typeof query !== "string" || query.length > 100) {
        throw new Error("Query must be a string with a max length of 100");
    }
    if (typeof delay !== "number" || delay < 100 || delay > 5000) {
        throw new Error("Delay must be between 100ms and 5000ms");
    }
    if (typeof searchFn !== "function") {
        throw new Error("searchFn must be a function");
    }

    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => searchFn(query), delay);
    };
}

// Example usage
const performSearch = (query) => {
    console.log(`Searching for: ${query}`);
};

// Create a debounced function with a 500ms delay
const searchWithDebounce = debouncedSearch("JavaScript", 500, performSearch);

// Simulate multiple rapid calls
searchWithDebounce();
searchWithDebounce();
searchWithDebounce();
setTimeout(searchWithDebounce, 600); // Executes after 600ms

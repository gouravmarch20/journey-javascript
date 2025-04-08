export function throttledClickHandler(clickFn, limit) {
    if (typeof clickFn !== "function") {
        throw new Error("clickFn must be a function");
    }
    if (typeof limit !== "number" || limit < 200 || limit > 5000) {
        throw new Error("Limit must be between 200ms and 5000ms");
    }

    let lastExecutionTime = 0;

    return function () {
        const now = Date.now();
        if (now - lastExecutionTime >= limit) {
            clickFn();
            lastExecutionTime = now;
        }
    };
}

// Example Usage
const handleClick = () => {
    console.log("Button clicked!");
};

// Create a throttled click handler with a 500ms limit
const throttledClick = throttledClickHandler(handleClick, 500);

// Attach to a button click event
document.getElementById("myButton").addEventListener("click", throttledClick);

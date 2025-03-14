const findMatchingElement = (container1, container2, targetElement) => {
    // If the targetElement is directly found in container1, return container2
    if (container1 === targetElement) return container2;

    // Get the children of container1 and container2
    const children1 = Array.from(container1.children);
    const children2 = Array.from(container2.children);

    // Iterate through the children of container1
    for (let i = 0; i < children1.length; i++) {
        if (children1[i] === targetElement) {
            // If the targetElement is found in container1, find the corresponding element in container2
            // Match based on textContent
            const targetText = targetElement.textContent;
            const matchingElement = Array.from(container2.children).find(
                (child) => child.textContent === targetText
            );
            return matchingElement || null; // Return the matching element or null if not found
        }

        // Recursively search in the children
        const result = findMatchingElement(children1[i], container2, targetElement);
        if (result) return result; // If a match is found, return it
    }

    // If no match is found, return null
    return null;
};

// When Target element exists in container1
const positiveResult = findMatchingElement(
    document.getElementById("container1"),
    document.getElementById("container2"),
    document.getElementById("span-id")
);

if (positiveResult) {
    console.log("Positive Result:", positiveResult.textContent); // Output: "Positive Result: Test1"
} else {
    console.log("Positive Result: No matching element found.");
}

// When Target element does not exist in container2
const negativeResult = findMatchingElement(
    document.getElementById("container1"),
    document.getElementById("container2"),
    document.getElementById("span-id-2")
);

if (negativeResult) {
    console.log("Negative Result:", negativeResult.textContent); // Output: "Negative Result: Test2"
} else {
    console.log("Negative Result:  ");
}
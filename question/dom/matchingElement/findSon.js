const findMatchingElement = (container1, container2, targetElement) => {
  console.log("findMatchingElement", container1, targetElement);

  if (container1 === targetElement) return container2;

  const children1 = Array.from(container1.children);
  const children2 = Array.from(container2.children);
  // console.log("dom", children1, children2);
  for (let i = 0; i < children1.length; i++) {
    const el1 = children1[i];
    const el2 = children2[i];
    // console.log("Visiting pair:", el1?.tagName, el2?.tagName);

    if (el1 && el2) {
      const result = findMatchingElement(el1, el2, targetElement);
      if (result) return result;
    }
  }

  return null;
};

// Positive test
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const targetElement1 = document.getElementById("span-id-1");

let positiveResult = null;
if (container1.contains(targetElement1)) {
  positiveResult = findMatchingElement(container1, container2, targetElement1);
}

if (positiveResult) {
  console.log("✅ Positive Result:", positiveResult.textContent);
} else {
  console.log("❌ Positive Result: No matching element found.");
}

// Negative test
const targetElement2 = document.getElementById("non-existent-id");
let negativeResult = null;
if (container1.contains(targetElement2)) {
  negativeResult = findMatchingElement(container1, container2, targetElement2);
}

if (negativeResult) {
  console.log("✅ Negative Result:", negativeResult.textContent);
} else {
  console.log("❌ Negative Result: No matching element found.");
}

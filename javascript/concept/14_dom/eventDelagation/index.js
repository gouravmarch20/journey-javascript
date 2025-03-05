// Select the parent element that contains all '.item' elements
const parent = document.getElementById("parent"); // Change this to your actual parent container

// Use event delegation to handle mouseenter and mouseleave
parent.addEventListener("mouseover", function (event) {
  console.log("on child mouse hover")
  // Check if the hovered element has the 'item' class
  if (event.target.classList.contains("item")) {
    event.target.style.color = "red"; // Change text color to red
  }
});

parent.addEventListener("mouseout", function (event) {
  // Check if the mouse left an 'item' element
  if (event.target.classList.contains("item")) {
    event.target.style.color = "black"; // Change text color back to black
  }
});

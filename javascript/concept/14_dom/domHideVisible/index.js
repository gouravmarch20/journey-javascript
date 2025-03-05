// Your task is to implement the functionality for toggling visibility of items
const toggleBtn = document.getElementById("toggle-btn");
const toggleItems = document.querySelectorAll(".toggle-item");

toggleBtn.addEventListener("click", function () {
  // Implement the logic to toggle visibility of elements with class "toggle-item"
  toggleItems.forEach((item) => {
    if (item.classList.contains("hide")) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
  // ------ CLICK ---
  // toggleBtn.addEventListener("click", function () {
  //   toggleItems.forEach((item) => {
  //     item.classList.toggle("hide");
  //   });
  // });
});

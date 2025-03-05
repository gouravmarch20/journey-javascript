const addButton = document.getElementById("add-items-btn");
const list = document.getElementById("item-list");

addButton.addEventListener("click", function () {
  //   const dom = [];
  //   const count = list.children.length;
  //   for (let i = 0; i < 10; i++) {
  //     dom.push(`<li> Item ${i + count} </li>`);
  //   }

  //   list.innerHTML += dom.join("");

  const fragment = document.createDocumentFragment();
  const count = list.children.length;
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${i + count} `;
    fragment.appendChild(li);
  }

  list.appendChild(fragment);
});

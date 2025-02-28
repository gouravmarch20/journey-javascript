const userActions = new Set();

function recordAction(action) {
  userActions.add(action);
  console.log("User actions:", userActions);
}

recordAction("viewed-product-page");
recordAction("added-to-cart");
recordAction("viewed-product-page");  
const array = [...userActions]
console.log(array)

var fruit = "apple";
function checkFruitScope() {
  if (true) {
    var fruit = "orange";
    console.log("Inside block:", fruit);
  }
  console.log("Outside block:", fruit);
}
checkFruitScope();
console.log("Global scope:", fruit);

const filter = (arr, test) => {
  let result = [];
  console.log("the", arr);
  for (const element of arr) {
    if (Array.isArray(element)) {
      // result.concat(filter(element, test));
      // ! issue 
      result = result.concat(filter(element, test));

    } else {
      if (test(element)) {
        result.push(element);
      }
    }
  }

  return result;
};

Array.prototype.filterInMultid = function (cb) {
  return filter(this, cb); // Return the filtered result
};

// const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const arr = [1, "4", 9, "9", "88", ["67", 3, [3, "foo"]]];
const res = arr.filterInMultid((type) => {
  if (typeof type == "string") return true;
  return false;
});
console.log(res);
// const filtered = filter(arr, (e) => typeof e === "object");
// console.log(JSON.stringify(filtered)); // Output: [[["foo"],"bar"]]

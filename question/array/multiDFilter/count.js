const countFilter = (arr, test) => {
  let result = 0;
  for (const element of arr) {
    if (Array.isArray(element)) {
      //!   result = 1 + countFilter(element, test);
      result += countFilter(element, test);
    } else {
      if (test(element)) {
        result += 1;
      }
    }
  }

  return result;
};

Array.prototype.filterInMultid = function (cb) {
  return countFilter(this, cb); // Return the filtered result
};

// const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const arr = [1, "88", "4", ["67", 3, [3, "foo", "45"]]];
const res = arr.filterInMultid((type) => {
  if (typeof type == "string") return true;
  return false;
});
console.log(res);
// const filtered = countFilter(arr, (e) => typeof e === "object");
// console.log(JSON.stringify(filtered)); // Output: [[["foo"],"bar"]]

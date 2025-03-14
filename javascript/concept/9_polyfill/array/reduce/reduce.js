Array.prototype.myReduce = function (cb, initValue) {
  if (!this.length && initValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  const inputArray = this;
  let acc = initValue !== undefined ? initValue : inputArray[0];

  for (let i = initValue !== undefined ? 0 : 1; i < inputArray.length; i++) {
    acc = cb(acc, inputArray[i]);
  }

  return acc;
};

//? Simple sum
const arr = [5, 2, 4, 6];
const cb = (acc, curr) => acc + curr;

const sum = arr.myReduce(cb, 0);
console.log(sum); // 17

//? AOO to object
const arr1 = [
  { val: 5, fName: "hunter" },
  { val: 10, fName: "death" },
  { val: 15, fName: "is_war" },
];

const cb1 = (acc, curr) => {
  if (curr.val > 6) {
    return { val: acc.val + curr.val, fName: acc.fName + " " + curr.fName };
  }
  return acc;
};

const objSum = arr1.myReduce(cb1, { val: 0, fName: "" });
console.log(objSum); // { val: 25, fName: " death is_war" }

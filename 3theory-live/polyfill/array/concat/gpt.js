
Array.prototype.myConcat =  function(...args) {
  let newArray = [...this];
  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (Array.isArray(arg)) {
      newArray.push(...arg);
    } else {
      newArray.push(arg);
    }
  }
  return newArray;
};

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = arr1.myConcat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
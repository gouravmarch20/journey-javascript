Array.prototype.myReduce = function (cb, initValue) {
  const inputArray = this
  let acc = String(initValue) ? initValue : inputArray[0]

  for (let i = 0; i < inputArray.length; i++) {
    acc = cb(acc, this[i])
  }
  return acc
}


//? simple sum
const arr = [5, 2, 4, 6]
const cb = (acc, curr) => {
  const sum = acc + curr
  return sum
}

// const sum = arr.myReduce(cb , 0 )
// console.log(sum);

//? AOO to object 
const arr1 = [
  { val: 5, fName: "hunter" },
  { val: 10, fName: "death" },
  { val: 15, fName: "is_war" },
]
const cb1 = (acc, curr) => {
  if (curr.val > 6) {
    return {val : acc.val + curr.val , fName : acc.fName + " "+ curr.fName  }
  }
  return acc
}

const sum = arr1.myReduce(cb1, {val : 0 , fName : ""})
console.log(sum)

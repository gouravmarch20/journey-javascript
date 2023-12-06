// l1 -> using ref power , because we are return array , & in machine coding we  
const replace = (numArray, replaceThis, replaceWith) => {
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === replaceThis) numArray[i] = replaceWith
  }
  return numArray
}

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10))

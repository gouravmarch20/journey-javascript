const reverseWord = (word) => {
  return word.split("").reverse().join("")
}
function reverseString(str) {
  const arr = str.split(" ")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = reverseWord(arr[i])
  }
  
  return arr.join(" ")
}

console.log(reverseString("this is cat"))

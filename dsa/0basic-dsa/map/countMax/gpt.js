function mostRepeatedCharacter(arr) {
  // Create an object to store the count of each element
  let count = {}
  
  arr.forEach(function (element) {
    if (count[element]) {
      count[element]++
    } else {
      count[element] = 1
    }
  })

  let maxOccurrence = Math.max(...Object.values(count))

  // Get the most repeated element(s)
  let mostRepeated = []
  for (let char in count) {
    if (count[char] === maxOccurrence) {
      mostRepeated.push(char)
    }
  }
  // Print the result
  mostRepeated.forEach(function (char) {
    console.log(`${char} occurs ${maxOccurrence} times`)
  })
}

// Example array
let inputArray = [1, 1, 3, 1, 2, 2, 2]

// Call the function with the example array
mostRepeatedCharacter(inputArray)

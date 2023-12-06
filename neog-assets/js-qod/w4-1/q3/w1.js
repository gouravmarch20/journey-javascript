const howManyFruitsAreSummerFruits = (summerFruits, fruits) => {
  let numberOfFruitsThatAreSummerFruits = 0
  let obj = {}
  for (let letter of summerFruits) {
    // n
    obj[letter] = 0
  }

  for (let letter of fruits) {
    // m
    if (obj[letter] !== undefined) {
      obj[letter]++
    }
  }

  for (let key in obj) {
    // n
    numberOfFruitsThatAreSummerFruits += obj[key]
  }
  return numberOfFruitsThatAreSummerFruits
}

console.log(howManyFruitsAreSummerFruits(`aA`, `aAAAbbbaac`))

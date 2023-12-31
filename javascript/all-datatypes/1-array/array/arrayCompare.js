const arrOne = [6, 4, 8]
const arrTwo = [8, 6, 4]
//  every : if all case true  then return true nothing return means false , while map / filter / forEach etc itterator is not usefull 
// indexOf -> return index if find that item
const isSame =
  arrOne.length === arrTwo.length &&
  arrOne.every(currentElement => {
    if (arrTwo.indexOf(currentElement) > -1) {
      return (currentElement == arrTwo[arrTwo.indexOf(currentElement)])
    }
  })
console.log(isSame);
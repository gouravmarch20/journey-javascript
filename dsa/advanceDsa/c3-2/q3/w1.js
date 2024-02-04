// Solution 3
const convertToArray = obj => {
  var keys = Object.keys(obj)
  var length = keys.length
  var pairs = []
  for (var i = 0; i < length; i++) {
    pairs[i] = [keys[i], obj[keys[i]]]
  }
  return pairs
}

console.log(convertToArray({ name: 'Jove', age: 4, noOfFriends: 5 }))

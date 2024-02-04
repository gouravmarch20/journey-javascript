const convertToArray = obj => {
  const arr = []
  for (const key in obj) {
    arr.push([key, obj[key]])
  }
  return arr
}

console.log(convertToArray({ name: 'Jove', age: 10, noOfFriends: 5 }))



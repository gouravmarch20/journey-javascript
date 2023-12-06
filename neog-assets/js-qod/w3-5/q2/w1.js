const majorityElement = arr => {
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1
    } else {
      obj[arr[i]] = 1
    }
  }

  for (const no in obj) {
    console.log(obj[no])
    if (obj[no] > arr.length / 2) {
      return no
    }
  }

  return 'No majority element'
}
console.log(majorityElement([1, 2, 3, 2, 2, 2]))

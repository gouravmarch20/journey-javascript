function shortArray ([...array]) {
  return array.sort((a, b) => a - b)
}

console.log(shortArray([100, 83, 32, 9, 45, 61]))

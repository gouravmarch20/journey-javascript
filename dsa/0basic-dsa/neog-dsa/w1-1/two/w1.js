const arrayLength = array => {
  for (var i = 0; array[i] !== undefined; i++);
  return i
}

console.log(arrayLength([1, 4, 5, 89, 4]))

// !TODO: FORGOT EQUAL TO CASE
const copySmallerStringToBigger = (str1, str2) => {
  if (str1.length >= str2.length) {
    str1 += str2

    return str1
  } else {
    str2 += str1
    return str2
  }
}
console.log(copySmallerStringToBigger('smaller String', 'bigger String'))

// tofix : space case
function encodedString (string) {
  let encodedString = []

  for (let i = 0; i < string.length; i++) {
    const asciiCode = string[i].charCodeAt() + 2
    encodedString.push(String.fromCharCode(asciiCode))
  }

  return encodedString.join('')
}
console.log(encodedString('neogcamp safk', 2))

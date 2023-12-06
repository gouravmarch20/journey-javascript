// console.log(2 % 26)
// TODO: SELF TRY
function getSecretCode (original, places) {
  let encodedString = ''
  for (let letter of original) {
    const asciiValue = letter.charCodeAt(0)
    let encodedCode = asciiValue + (places % 26)
    //small  ASCII
    if (asciiValue >= 97 && asciiValue <= 122) {
      // avoid ascii to beyond z re-push to a to z
      if (encodedCode > 122) {
        encodedCode -= 26
      }
    }
    // capital ascii
    else if (asciiValue >= 65 && asciiValue <= 90) {
      if (encodedCode > 90) {
        encodedCode -= 26
      }
    }
    encodedString += String.fromCharCode(encodedCode)
    // encodedString = encodedString.concat(String.fromCharCode(encodedCode))
  }

  return encodedString
}

// console.log(getSecretCode('Abcdzy', 2))
// console.log(getSecretCode('abcd', 29))
console.log(getSecretCode('abcd', -1))

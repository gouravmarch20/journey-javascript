//using for & switch
const numberOfVowelsAndConsonants = str => {
  const letters = { Vowels: 0, Consonants: 0 }

  for (let i = 0; i < str.length; i++) {
    // check if the item is an alphabet or not
    if (
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
    ) {
      switch (str[i]) {
        // check if the alphabet is a vowel or not
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
          letters.Vowels += 1
          break

        // if the alphabet is not vowel, it is a consonant
        default:
          letters.Consonants += 1
      }
    }
  }

  return letters
}

console.log(numberOfVowelsAndConsonants('bookkeeper'))

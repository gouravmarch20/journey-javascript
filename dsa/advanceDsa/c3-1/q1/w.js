// l1 : concat not directly asign --> it return concat value therefore we use =+ in string
// l2 : += const mai give error because primitive data mai asing
const insertString = (str, newWord, index) => {
  let concatString = ''
  for (let i = 0; i < index; i++) {
    concatString += str[i]
  }
  concatString = concatString.concat(newWord)
  for (let i = index; i < str.length; i++) {
    concatString += str[i]
  }
  return concatString
}
console.log(
  insertString('We are doing some problem solving.', 'JavaScript ', 18)
)

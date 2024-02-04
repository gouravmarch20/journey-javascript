// Write your own subString method here
const subString = str => {
  const subSetArr = []
  let tempWord = ''
  for (let i = 0; i < str.length; i++) {
    subSetArr.push(str[i])
    for (let j = i; j < str.length; j++) {
      tempWord += str[j]
    }
    subSetArr.push(tempWord)
    tempWord = ''
  }
  console.log(subSetArr)
}
subString('neog')
// Expected Output
//   ('n', 'ne', 'neo', 'neog', 'e', 'eo', 'eog', 'o', 'og', 'g')

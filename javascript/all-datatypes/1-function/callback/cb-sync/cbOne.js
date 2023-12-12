//creating our owm callback function -->  function as an argument
const strLength = (name, callback) => {
  const lengthOfName = name.length
  callback(lengthOfName)
}
const printName = nameLength =>
  console.log(`OMG! My name is ${nameLength} --> charcter long`)

strLength('gourav', printName)

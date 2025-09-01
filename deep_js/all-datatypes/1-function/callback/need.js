// ! aync task -
function getName (name) {
  setTimeout(() => {
    console.log('-----> inside settimeout---> now return name')
    return name
  }, 2000)
}
const getName1 = getName('alpha')
console.log(getName1, '<-- not able to get name')

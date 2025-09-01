let nameOne = () => {
  let array = []
  for (let i = 0; i < array.length; i++) {
    array.push(i)
  }
  console.log("first")
  return `aceess granted ${name}`
}
let hof = (nameOne, name) => {
  nameOne(name)
}
hof(nameOne, "gourav")

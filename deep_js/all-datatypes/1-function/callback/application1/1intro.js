const printName = (name) => {
  console.log(name)
  getHobbies(name, (hobby) => {
    console.log(hobby)
  })
}

function getHobbies(name, cb) {
  setTimeout(() => {
    console.log("--- ? getHobbies")
    cb(["cricket", "reding"])
  }, 2000)
}

function getName(name, cb) {
  console.log("--- getName")
  setTimeout(() => {
    cb(name)
  }, 2000)
}

getName("grek", printName)

const printName = name => console.log(name)
function getName (name, cb) {
  setTimeout(() => {
    cb(name)
  }, 2000)
}
getName('grek', printName)

// complex logic mai turn
// hard to read code --> timer if multiple callback
// ** here getHobbies depend upont printName --> if printName fail getHobbies fail
const printName = name => {
  console.log(`--- ${name} printName function`)
  getHobbies(name, getHobby => {
    console.log(getHobby)
  })
}

function getHobbies (name, cb) {
  setTimeout(() => {
    console.log('print hobby by callback ')
    cb(['cricket', 'reding'])
  }, 2000)
}

function getName (name, cb) {
  // console.log('--- getName fun call')
  setTimeout(() => {
    cb(name)
  }, 2000)
}

getName('grek', printName)

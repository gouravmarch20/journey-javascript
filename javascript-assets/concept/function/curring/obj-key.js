const userObj = {
  name: 'gourav',
  age: 39
}

function userInfo (obj) {
  return function (userInfo) {
    return obj[userInfo]
  }
}
let res = userInfo(userObj)

console.log(res('name'))
console.log(res('age'))

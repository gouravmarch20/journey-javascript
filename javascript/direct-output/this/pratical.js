// gives methods access that present variable inside object
const obj = {
  name: 'gourav',
  sing () {
    return 'dixon' + this.name
  }
}
console.log(obj.sing())

//
function impDetail () {
  console.log(this.code)
}
const obj1 = {
  code: '6 hours',
  impDetail: impDetail
}

obj1.impDetail()
//
const impD = () => {
  console.log(this) 
}
const obj2 = {
  code: '6 hours',
  impDetail: impD
}

obj2.impDetail()

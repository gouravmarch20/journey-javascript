const obj = {
  name: 'gourav',
  role: 'sd',
  address: {
    city: 'delhi'
  }
}
Object.seal(obj)
console.log(Object.isSealed())
// add 
obj.new = 'dd'
console.log(obj.new)
// update
obj.name = 'gitman'
console.log(obj.name)
//delete
delete obj.role
console.log(obj.role)
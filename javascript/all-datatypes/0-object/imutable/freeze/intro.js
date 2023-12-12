const obj = {
  name: 'gourav',
  role: 'sd',
  address: {
    city: 'delhi'
  }
}
Object.freeze(obj)
console.log(Object.isFrozen(obj))
obj.name = 'kit'
console.log(obj.name)
obj.address.city = 'france'
console.log(obj.address.city);

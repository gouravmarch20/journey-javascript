// avoid code repetation
const person1 = {
  name: 'goku',
  battery: 30,
  chargeBattery: function (chargePerentage) {
    this.battery = chargePerentage
  }
}
const person2 = {
  name: 'vegeta',
  battery: 59
}
person1.chargeBattery.apply(person2, [99])
console.log(person2) //*** application /

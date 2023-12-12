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
const chagePerson2 = person1.chargeBattery.bind(person2, 99)
chagePerson2()
console.log(person2)

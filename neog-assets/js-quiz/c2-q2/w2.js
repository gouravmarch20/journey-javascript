// pass params as array in call
// ? +  operator no role
// TODO: HOW 
const person = {
  fullName: function (city, country) {
      console.log(city);
      console.log(country);
    console.log(
      this.firstName + ' ' + this.lastName + ',' + city + ',' + country
    )
  }
}

const person2 = {
  firstName: 'John',
  lastName: 'Dave'
}

person.fullName.call(person2, ['Oslo', 'Norway'])
// person.fullName.call(person2, 'Oslo', 'Norway')
// person.fullName.apply(person2, ['Oslo', 'Norway'])

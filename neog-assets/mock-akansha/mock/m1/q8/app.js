// ? implecit binding
// this keyword implectly bound to the object /this keyword implectly point  to the object who create him

const object = {
  firstName: 'go',
  lastName: 'tan',
  getFullName: function () {
    return `${this.firstName}${this.lastName}`
  }
}

// * function inside other object
// ? getFullName ref here to innerObject ==> invoke any function that function this ref to that function who had called him
const object1 = {
  firstName: 'go',
  lastName: 'tan',
  getFullName: function () {
    return `${this.firstName}${this.lastName}`
  },
  innerObject: {
    getFullName: function () {
      return `${this.firstName}${this.lastName}`
    }
  }
}

// console.log(object.getFullName())
console.log(object1.innerObject.getFullName())

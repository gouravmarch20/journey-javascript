// * explicit binding ==> 
// ? function borrowing methord 
// - bind : create copy of function && bind function to object && function borrow this funciton ==> we hav
// - call : not create ref same function  
// - apply : similar to call , but we pass argument as array
const object = {
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

console.log(object.innerObject.getFullName.bind(object))

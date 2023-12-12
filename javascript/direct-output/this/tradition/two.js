
// this point to nested object 
let obj = {
  firstName: 'gourav',
  lastName: 'mishra',

  address: {
    street: 'newmart',
    city: 'delhi',
    getAddress: function () {
      console.log(this.city)
      console.log(this.firstName)
      console.log(this)
    }
  }
}
obj.address.getAddress()

let obj = {
  firstName: 'gourav',
  getFullName: function () {
    console.log(firstName)// ! not able to acess key value of object , so this point to object & we able to acess the value of that 
  }
}
obj.getFullName()

let obj = {
  firstName: 'gourav',
  getFullName: function () {
    console.log(this.firstName)
  }
}
obj.getFullName()
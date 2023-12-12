let User = function (firstName, courseCount) {
  ;(this.firstName = firstName), (this.courseCount = courseCount)
}
User.prototype.getFirstName = function () {
  console.log(this.firstName)
}
const user = new User('gourav', 'lco')
// ?
user.getFirstName()
console.log(user.courseCount)

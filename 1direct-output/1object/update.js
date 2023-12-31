const user = {
  email: "my@email.com",
  email1: "my@email.com",

  updateEmail: function(newEmail) {
    this.email = newEmail;
  },
  updateEmail1: (newEmail) => {
    this.email1 = newEmail;
  }
}

user.updateEmail("new@email.com")
user.updateEmail1("1@email.com")
console.log(user.email)
console.log(user.email1)
//^ arrow function

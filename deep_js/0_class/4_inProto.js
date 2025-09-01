function User() {
  let password = "secret"; //? private variable in closure

  this.checkPassword = function (pw) {
    return pw === password;
  };
}

const u = new User();
console.log(u.checkPassword("secret"));
console.log(u.password);

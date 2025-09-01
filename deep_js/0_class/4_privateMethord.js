class User {
  #password = "secret"; // private
  checkPassword(pw) {
    return pw === this.#password;
  }
}
const u = new User();
console.log(u.checkPassword("secret"));
// console.log(u.#password); ❌ Error

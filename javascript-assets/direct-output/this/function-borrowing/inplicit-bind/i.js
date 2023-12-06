// THIS
// ? IMPLICIT BINDING ==> by this keyword  ==> .call by default we had not done anything
let ask = {
  teacher: 'akansha',
  who: function () {
    console.log(this.teacher)
  }
}
ask.who()

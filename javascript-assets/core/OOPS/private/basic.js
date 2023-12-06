class BankAccount {
    name = 'BankAccount'
    #pin = '99223'
    #getNamePrivate() { return this.name}
    getName() { return this.name}
}
const acc1 = new BankAccount()
console.log(acc1.name)
console.log(acc1.pin)//! private var not accssible
// console.log(acc1.getNamePrivate())//! private function not accssible
console.log(acc1.getName())
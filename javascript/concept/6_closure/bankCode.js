function BankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (val) {
      balance += val;
    },
    getBalance: function (val) {
      return balance;
    },
    withdraw: function (val) {
      balance = balance - val;
    },
  };
}

let myAccount = BankAccount(100).deposit(100).deposit(100).withdraw(50).getBalance();
// myAccount.deposit(600)
// myAccount.deposit(300)
// myAccount.withdraw(200)

console.log(myAccount.getBalance())
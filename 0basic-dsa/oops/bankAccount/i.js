class BankAccount{
    constructor(name, bankName , balance , type , ifs) {
        this.name = name;
        this.bankName = bankName;
        this.balance = balance;
        this.type = type;
        this.ifs = ifs;
      }
      deposit(amount) {
        this.balance += amount;
      }
      withdraw(amount) {
        if (this.balance >= amount) {
          this.balance -= amount;
        } else {
          console.log('insufficient funds');
        }
      }
}
const p1 = new BankAccount("jin" , "sbi" , 44 , "saving" , "590209")
const p2 = new BankAccount("ram" , "sbin" , 444 , "current" , "323")
p2.withdraw(44)
p1.deposit(56)
console.log(p1);
console.log(p2);
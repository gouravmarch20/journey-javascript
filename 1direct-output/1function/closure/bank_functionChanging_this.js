function BankAccount(initialBalance) {
    let balance = initialBalance; // Initialize balance with the provided initialBalance
    
    return {
        deposit: function (val) {
            balance += val;
            return this; // Return the object to enable method chaining
        },
        withdraw: function (val) {
            balance -= val;
            return this; // Return the object to enable method chaining
        },
        getBalance: function () {
            return balance; // Return only the balance value, no chaining needed
        },
    };
}

// Correct way: Separate `getBalance()` from the chain
let myAccount = BankAccount(100).deposit(100).deposit(100).withdraw(50);
let balance = myAccount.getBalance(); // Get balance separately ==> can return only this || balance
console.log(balance); // Output: 250

 

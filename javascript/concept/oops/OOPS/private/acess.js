class BankAccount {
  name = "BankAccount";
  #pin = "99223";
  getName() {
    return this.name;
  }

  #getIfcsCode() {
    return 8888323;
  }
  getSecreatDetails() {
    return {
      pin: this.#pin,
      name: this.name,
      ifcs: this.#getIfcsCode(),
    };
  }
}

const acc1 = new BankAccount();

console.log(acc1.getSecreatDetails());

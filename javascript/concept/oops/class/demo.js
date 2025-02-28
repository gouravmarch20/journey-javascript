// Parent class
class Family {
  constructor(lastName , firstName) {
    this.lastName = lastName;
    this.firstName = firstName;

  }

  familyTradition() {
    return "Sunday dinners";
  }
}

// Child class that extends Family
class Couple extends Family {
  constructor(lastName,firstName , partnerName) {
    super(lastName , firstName); // Calls the parent class constructor
    this.partnerName = partnerName;
  }

  // Overriding the familyTradition method
  familyTradition() {
    return `${this.partnerName} loves hosting Sunday dinners.`;
  }
}

// Creating an instance of Couple
const couple = new Couple("Smith","gojo", "Emily");

console.log(couple.lastName); // Output: "Smith" (inherited from Family)
console.log(couple.familyTradition()); // Output: "Emily loves hosting Sunday dinners."
console.log(couple); // Output: "
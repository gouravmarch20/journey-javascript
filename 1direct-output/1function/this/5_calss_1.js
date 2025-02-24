// Define the Car class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
}

// Create an instance of Car
const myCar = new Car('Tesla', 'Model 3');
myCar.displayInfo(); // Output: This car is a Tesla Model 3.

// Another object without displayInfo()
const anotherCar = { brand: 'BMW', model: 'X5' };

// Using .call() to borrow displayInfo() method
myCar.displayInfo.call(anotherCar); // Output: This car is a BMW X5.

// Using .apply() (same as call, but takes arguments as an array)
myCar.displayInfo.apply(anotherCar); // Output: This car is a BMW X5.

// Using .bind() to permanently bind the method to anotherCar
const boundFunction = myCar.displayInfo.bind(anotherCar);
boundFunction(); // Output: This car is a BMW X5.

// Extending the Car class to create an ElectricCar class
class ElectricCar extends Car {
    constructor(brand, model, battery) {
        super(brand, model); // Call the parent constructor
        this.battery = battery;
    }

    displayBattery() {
        console.log(`This ${this.brand} ${this.model} has a ${this.battery} battery.`);
    }
}

// Create an instance of ElectricCar
const myEV = new ElectricCar('Tesla', 'Model S', '100 kWh');
myEV.displayInfo();       // Output: This car is a Tesla Model S.
myEV.displayBattery();    // Output: This Tesla Model S has a 100 kWh battery.

// Export for Node.js usage
module.exports = { Car, ElectricCar, myCar, myEV };

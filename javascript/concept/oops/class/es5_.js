// Step 1: Create the constructor function
function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
  }
  
  // Add describe method to Vehicle prototype
  Vehicle.prototype.describe = function () {
    const article = /^[aeiou]/i.test(this.type) ? "an" : "a";
    return `This is ${article} ${this.type} with ${this.wheels} wheels.`;
  };
  
  // Step 2: Create a prototype-based object using Object.create()
  const ElectricVehicle = Object.create(Vehicle.prototype);
    // ElectricVehicle.prototype.constructor = ElectricVehicle;//! not need Object.create only copy properties not prototype  thus do this give error 
  
  // Step 3: Add additional properties and methods to ElectricVehicle
  ElectricVehicle.batteryLife = 0; // A shared property (not instance-specific)
  ElectricVehicle.batteryStatus = function () {
    return `Battery life is ${this.batteryLife} hours.`; // Uses `this` assuming it will be bound to an instance
  };
  
  // Export constructors and ElectricVehicle object for testing
  module.exports = { Vehicle, ElectricVehicle };
  
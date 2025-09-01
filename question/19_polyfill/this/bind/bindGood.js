// Objects with different names
let obj = { name: 'Goku' };
let objTwo = { name: 'Goten' };

// Function with arguments
function introduce(powerLevel, skill) {
  console.log(`${this.name} has power level ${powerLevel} and uses ${skill}`);
}

// 🔹 bind to obj
const introGoku = introduce.bind(obj, 9000);  
// pre-sets powerLevel = 9000, waits for skill
introGoku("Kamehameha");  
// Output: Goku has power level 9000 and uses Kamehameha

// 🔹 bind to objTwo
const introGoten = introduce.bind(objTwo);
introGoten(5000, "Masenko");  
// Output: Goten has power level 5000 and uses Masenko
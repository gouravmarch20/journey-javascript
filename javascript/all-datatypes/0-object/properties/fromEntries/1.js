const keys = ["name", "age"]
const values = ["Lydia", 22]


const val = Object.fromEntries(keys.map((_, i) => {

	return [keys[i], values[i]]
})) 
console.log(val);


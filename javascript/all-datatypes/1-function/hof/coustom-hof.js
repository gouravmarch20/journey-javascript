const radius = [3, 1, 2, 4]
// ! callback function
const area = (radius) => Math.PI * radius * radius
const circumference = (radius) => 2 * Math.PI * radius
const diameter = (radius) => 2 * radius
// ! Hof : calculate
const calculate = function (radius, logic) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}
console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(radius.map(diameter))

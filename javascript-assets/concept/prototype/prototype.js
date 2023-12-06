
// Adding coustom function : // ? now   array ==> methord

const radius = [3, 1, 2, 4]
const area = (radius) => Math.PI * radius * radius
const circumference = (radius) => 2 * Math.PI * radius
const diameter = (radius) => 2 * radius
// ! Coustom function added to array  like map => acess in whole module of array
Array.prototype.calculate = function (arr, logic) {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]))
    }
    return output
}
console.log(radius.calculate(radius , diameter))

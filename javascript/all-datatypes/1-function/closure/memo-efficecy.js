//? Memory efficient 
// fuction run in EC and get destroyed 
function heavyDuty(index) {
    const bigArray = new Array(15000).fill('ki')
    console.log("fuction run in EC and get destroyed")
    return bigArray[index]

}
console.log(heavyDuty(6489))
console.log(heavyDuty(689))
console.log(heavyDuty(1489))
// By closure we are running it onces & save it => 
function heavyDutyTwo() {

    const bigArray = new Array(15000).fill('ki')
    console.log("by lecial scope it acess parent varible & only function call block run ")
    return function x() {
        return bigArray
    }

}
const hof = heavyDutyTwo()// return x function
hof()
hof()
hof()
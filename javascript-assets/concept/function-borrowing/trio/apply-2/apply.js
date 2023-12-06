// apply : like call => but argument pass in array list type => more arguments can be passed

let userDetailsOne= {
    name: "gourav",
    age: 21,
    designation: "i9",
    logo: "education",
}
let userDetailsTwo = {
    name: "anonymous",
    age: 21,
    designation: "i9",
    logo: "education",
}
const printDetails = function (state, country) { console.log(this.name, state, country) }
printDetails.apply(userDetailsOne, ["Delhi", "India"])
printDetails.apply(userDetailsTwo, ["Bihar", "India"])



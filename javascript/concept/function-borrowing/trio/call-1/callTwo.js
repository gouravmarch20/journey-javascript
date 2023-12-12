// call => fuction borrowing

let userDetails = {
    name: "gourav",
    age: 221,
    designation: "i5",
    logo: "rail",

}

let userDetailsTwo = {
    name: "anonymous",
    age: 21,
    designation: "i9",
    logo: "education",

}

// ! if function outside 
const printDetails = function (a) { console.log(this.name, a), a }
// ! we acess by
printDetails.call(userDetails, "--- self params pass to  -------")
printDetails.call(userDetailsTwo)
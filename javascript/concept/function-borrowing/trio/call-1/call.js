// call

let userDetails = {
    name: "gourav",
    age: 221,
    designation: "i5",
    logo: "rail",
    printDetails: function () { console.log(this) }

}

let userDetailsTwo = {
    name: "anonymous",
    age: 21,
    designation: "i9",
    logo: "education",

}
// userDetails.printDetails()
// ! fucntion borrowed : fuction copy avoid => this we can acess 
userDetails.printDetails.call(userDetailsTwo)
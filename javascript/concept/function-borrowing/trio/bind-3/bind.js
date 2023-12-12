// like call , but not direct function call =>we  store copy of function , and invoke it when it require
// ! by bind we  create copy of function and invoke it later 
let userDetails = {
    name: "gourav",
    age: 221,
    designation: "i5",
    logo: "rail",

}
const printDetails = function (state, country) {
    console.log(this.name, state, country)
}
const newFunction = printDetails.bind(userDetails, "delhi", "india")
newFunction()
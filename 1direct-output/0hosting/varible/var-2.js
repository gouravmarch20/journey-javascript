
b = 25 //* in window
var b = 1//* function is window --> so in window
console.log(b);
{
    var b = 5
}
function xy(params) {
    var b = 88
    console.log(b);
}
xy()
console.log("block effect ",b);


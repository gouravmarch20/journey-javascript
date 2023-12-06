String.prototype.toProperCaseText = "this is same porject";

const getFirstTextInUpperCase = (str) =>{
    console.log()
}
String.prototype.toProperCase = function (str) {
//   const arrStr = str.split(" ");
 return str.split(' ')
  .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
  .join(' ');

  //  console.log(str)
};

const a = "hello";
console.log(a.toProperCaseText);
console.log(a.toProperCase("git is offline"));

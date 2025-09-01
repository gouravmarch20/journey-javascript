// local language mai --> string / number format
// 
const date1 = new Date(2022 , 11 , 20 , 4)
console.log(date1);
const date2 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(date2);
console.log(date1.toLocaleDateString('ja-JP'));
console.log(date1.toLocaleDateString('en-IN'));
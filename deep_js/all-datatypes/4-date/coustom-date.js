console.log(new Date()); //as per browser

console.log(new Date("2022/03/19"));
console.log(new Date("2022-03-19"));
console.log(new Date("3-23-2022")); //? mm-dd-yy
console.log(new Date("Mar 22 2022"));
const coustomDateSlashFormat = new Date(" 3/10/2023"); // month / date / year
const coustomDateHypenFormat = new Date(" 3-10-2023 10:23:45"); // month / date / year
console.log(coustomDateSlashFormat);
console.log(coustomDateHypenFormat);

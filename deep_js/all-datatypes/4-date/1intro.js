// Date auto return the correct format  date --> if no time give set 00:00:00 , ***  date format  it give ==> year/ month/day
const dateNum = new Date(2022, 6, 22) // ** month 12 not exit --> so january sai start if number way sai declare
console.log(typeof dateNum)
//! recommend to use string way --> month / date not start with 0
const dateStr = new Date('2022-6-22')
const dateStr1 = new Date('2022/6/22')
const dateStr2 = new Date('2022/16/22')// month not valid
console.log(dateStr2)

// 
console.log(dateNum)
console.log(dateStr)
console.log(dateStr1)
console.log(typeof dateStr1)
console.log(typeof dateStr1.toString()) //**  to apply string property or array

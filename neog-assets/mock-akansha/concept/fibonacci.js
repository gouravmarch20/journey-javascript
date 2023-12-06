// starting 0 , 1 fix rest n + n-1 sai decide

// 0 , 1 , 2 , 3 , 5 , 8 , 13 , 21, 34 ....
//  
const num = 100
let num1 = 0
let num2 = 1
let fn = num1 + num2
while (fn < num) {
    console.log(fn)

  fn = num1 + num2
  num1 = num2
  num2 = fn
}

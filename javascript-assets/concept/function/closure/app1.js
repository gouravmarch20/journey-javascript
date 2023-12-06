function counter () {
  var count = 0
  return function incrementCounter (funType) {
    count++
    if (funType) {
      console.log(funType, ' -> ', count)
    } else {
      console.log(count)
    }
  }
}
// console.log(count);//? can not acess 
let counter1 = counter()
counter1('fun1')
counter1('fun1')
let counter2 = counter()
counter2()
counter2()
//
counter1('fun1')
//
counter2()
counter2()

//! modify in real array , return deleted array
//? splice(index where to del start  , howMany=> delete,new item to add )

let array = ["a", "b", "c", "d"]
array.splice(2, 1, "goTan")
console.log(array)
// ** delete 5 items f
array = ["a", "b", "c", "1", "2", "3", "4", "5", "d", "e", "f"]

console.log(77 , array.splice(3, 5, "--"))
console.log(array)

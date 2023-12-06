// wehen we need to add item in between --> start / end task ==> aleardy methord unship , pop
//! modify in real array , return nothing
//? splice(index  , howMany => delete / shift    ,new item to add )
/* 
index : where to start
how many : to delete how many item /  by 0 we shift to right avoid delete 


*/
let array = ['a', 'b', 'c', 'd']
array.splice(2, 0, 'goku', 'gotan') //? add
console.log(array)
// ** delete 5 items f 
array = ['a', 'b', 'c', '1', '2', '3', '4', '5', 'd', 'e', 'f']

array.splice(3, 5, 'goku', 'gotan') //? delete & add => from index start delete  till end of index ,  and add given item
console.log(array)

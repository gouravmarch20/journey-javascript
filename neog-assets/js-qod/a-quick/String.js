1.
const sentence = '  we are neog  '
console.log(sentence.trim().length)
// 2
toLowerCase() , toUpperCase()

// 3  -> return boolean , case sensitive 
includes()
// 4. indexof / last index of => return index if find & after find stop 

lastIndexOf() , indexOf()
//5. start with / end with => return boolean , case sensetive
startWith() , endWith()

//6 . search => return index , of matched word -1 if not found 
//7. match => all find and store in array & return it

// 8. replace first one , by regex we can replace multiple times
replace() , replace(/is/g , "are")
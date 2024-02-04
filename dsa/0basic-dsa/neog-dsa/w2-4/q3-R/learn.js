// l1>undefined falsey value => inverse true value
// l2> obj[key] = 4 ===> if 1 value then auto asign else ===> obj[key].fieldName  = 5
// l3> for in loop use here

// l4 > if(a || b || c) ==> a false check b if b false check c --> c false --> if block not run , but even 1 true then block run
const tempObj = { alpha: 5 }
console.log(tempObj['a'])
console.log(!tempObj['a'])
tempObj['a']++ //! a key mai undifiend so undefiend + 1 ==> NaN
tempObj['b'] += 15 //? undefined ==> Nan
tempObj['c'] = 5
tempObj['c']++ // possible in asigned value ==> tempObj['c'] = tempObj['c'] + 1
tempObj['d'] = tempObj['d']++ || 0 // if falsy then 0 asign , true mai first one

console.log(tempObj)

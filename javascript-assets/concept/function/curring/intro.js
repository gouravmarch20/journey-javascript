//  fun a call , fun b then function c return function to b , b run & retun function to a , a print

// !  Closore observation : function b able to acess function a value  => any time  


// way1 : 
const add = (numOne) => numTwo => numTwo + numOne;
const result = add(2)(4)

// way2: 
const functionOne = add(10)
const resultOne = functionOne(5)


console.log(result)
console.log(resultOne)


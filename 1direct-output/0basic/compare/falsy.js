// There are 8 falsy values:

// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.


console.log(new Number(0) && "number object not false" );
console.log('' && "not falsy");
console.log(new Boolean(false) && "boolean object not false" );

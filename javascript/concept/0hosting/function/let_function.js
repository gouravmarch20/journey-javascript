function a() {
  console.log('20');
}

console.log(typeof a);
a();

let a = 10;
console.log(typeof a);
console.log(a);

/*
mc :: function a hosted , let/const hosted but not initalized  -> in TDZ
ec :: a is hosted as function  so a() .... let a = 10;  // redeclaring 'a' using let .... //? When you try to declare a with let after the function declaration, JavaScript considers it a re-declaration of a (even though it's a different type: a variable now, not a function).
*/
//var : undefined 
// TDZ -> LET / CONST

// a -> undefined 
// b , c -> hosted but in temp dead zone


function abc () {
  console.log(a, b, c)
  var a = 10
  let b = 12
  const c = 15
}
abc()

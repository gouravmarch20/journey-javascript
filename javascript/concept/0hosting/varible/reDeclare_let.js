// a already in function scope so var a fail  to asign
function test () {
    let a = 'hello'
    console.log(a)
    if (true) {
      var a = 43//** scope overlapping */
      console.log(a)
    }
    console.log(a)
  }
  test()
  
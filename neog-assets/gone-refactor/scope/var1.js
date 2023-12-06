function test () {
  let a = 'hello'
  console.log(a)
  function test2 () {
    if (true) {
      var a = 43 //** scope overlapping */
      console.log(a)
    }
  }
  test2()
}
test()

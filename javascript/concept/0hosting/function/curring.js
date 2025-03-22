function a(x) {
  function b(y) {
    console.log(x, y, z)
    function c(z) {}
    c(10)
  }
  b(15)
  
}
a(45)
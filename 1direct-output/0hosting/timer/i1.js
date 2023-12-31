function x () {
    setTimeout(() => {
      console.log(i)
    }, 1000)
    setTimeout(() => {
      console.log(a)
    }, 1000)
    let i = 1
    var a = 1
  }
  x()
  
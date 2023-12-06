// TODO: FIX USING CLOSURE CONCEPT --> var will ve there & print 0 , 1 , 2 

const funA = function () {
  for (var i = 0; i < 3; i++) {
   return function  () {
      setTimeout(() => {
        console.log(i)
      }, 3000)
    }

  }
}
funA()
funA()()
funA()()()

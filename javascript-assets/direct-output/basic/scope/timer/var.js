const funA = function () {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, 3000)
  }
}
funA()
/*
var - it has function level scope 
    - so i -> 0 var i = 0 
    ---> setTimeOut go to webApi
    - so i -> 1 var i = 1
    ---> setTimeOut go to webApi
    - so i -> 2 var i = 2
    ---> setTimeOut go to webApi
    - so i -> 3 var i = 3
    ---> setTimeOut go to webApi

    ******for loop ended ***********

---> setTimeOut time finished from webApi go to cb to stack
  * now i is refering to current i value it's 3 

*/

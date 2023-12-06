const funA = function () {
   for (var i = 0; i < 3; i++) {
     (function (j) {
       setTimeout(() => {
         console.log(j)
       }, 3000)
     })(i)
   }
 }
 
 funA() // logs 0, 1, and 2 with a delay of 3 seconds between each log
 
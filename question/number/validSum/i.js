// 1, 2 , null , '3' , 

const sum = (...arr) => {
   if (arr.length === 0) 0
   let newArr = []
   arr.forEach((num) => {
      if (!isNaN((num)) && typeof num !== 'object') {
         newArr.push(Number(num))
      }
   })

   const sum = newArr.reduce((acc, curr) =>{ 
      
      return acc + curr
   })
   console.log("000",sum);
}

sum(1, 2, 3, null, '4', 4)

// console.log(parseInt(1));
console.log(parseInt(1));
console.log(parseInt('1'));
console.log(isNaN('1'));
console.log(isNaN('13232'));
console.log(isNaN('abc'));
console.log(isNaN('null'));
console.log("---",parseInt([1,2,3]));
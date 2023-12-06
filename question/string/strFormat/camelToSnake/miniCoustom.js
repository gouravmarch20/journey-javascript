const str = 'Ii Am The Best'


const camelToSnake = (str) => {
   const strWithSpace = str.split(' ')
   console.log(strWithSpace);
   for (let i = 0; i < strWithSpace.length; i++) {
     if(i === 0){
      strWithSpace[i] = strWithSpace[i].toLowerCase()
     }
      
   }
   console.log(strWithSpace.join('') );
  
  


}
console.log(camelToSnake(str))
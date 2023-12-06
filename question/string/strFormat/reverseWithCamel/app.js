const reverseCharExeceptSpecialSymbol = (str) => {
   let word = []
   // Lowercase alphabet
   const lowercaseArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

   // Uppercase alphabet
   const uppercaseArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

   const allAlphabetLetter = [...lowercaseArr , ...uppercaseArr]
   //
   const strArr = str.split('')
   for (const s of strArr) {
      if(s.match(/[A-Z]/gi)){
         word.push(s)
      }
      
   }

   word = word.reverse()

   for (let j = 0; j < strArr.length; j++) {
      const element = strArr[j];
      if(! element.includes(allAlphabetLetter[j])){
         word.splice(j, 0 , strArr[j])
      }
      
   }
   console.log(word);
}
reverseCharExeceptSpecialSymbol('$sim*ui')
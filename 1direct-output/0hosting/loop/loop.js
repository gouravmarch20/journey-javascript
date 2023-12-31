// ! each  iteration let /const prev ==> value destroy
//~ next time assign value 3 one or prev one
const upperCase = str => {
  for (let i = 0; i < str.length; i++) {
     const  asciiValue = str[i].charCodeAt()
     console.log(asciiValue);
   
  }
}
upperCase('abc Abc ')

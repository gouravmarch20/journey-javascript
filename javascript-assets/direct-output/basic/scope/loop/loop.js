// ! each  itteration let /const ==> value destory
const upperCase = str => {
  for (let i = 0; i < str.length; i++) {
     const  asciiValue = str[i].charCodeAt()
     console.log(asciiValue);
   
  }
}
upperCase('abc Abc ')

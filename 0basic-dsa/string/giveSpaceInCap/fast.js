
  const giveSpace = (str) => {
    //? /[A-Z]/g  whenever found  capital letter --> 
    //? ' $&' ::: add space before that char

    return str.replace(/[A-Z]/g , ' $&').trim()
  }
  console.log(giveSpace("MyNameIsGohTan"))
  
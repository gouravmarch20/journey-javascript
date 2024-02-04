const charAtO = (str, atIndex) => {
  //   let maxNo = args[0]
  for (let i = 0; i < str.length; i++) {
    if (i === atIndex) {
      return str[i]
    }
  }
}
console.log(charAtO('neogCamp', 4))

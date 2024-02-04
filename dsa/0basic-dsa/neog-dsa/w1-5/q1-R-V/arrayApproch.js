const concatStr = (str1, str2) => {
  const concatStr = []
  if (str1.length >= str2.length) {
    for (let i = 0; i < str1.length; i++) {
      concatStr.push(str1[i])
    }
    // concatStr.push(' ')
    for (let i = 0; i < str2.length; i++) {
      concatStr.push(str2[i])
    }
  } else {
    for (let i = 0; i < str2.length; i++) {
      concatStr.push(str2[i])
    }
    // concatStr.push(' ')
    for (let i = 0; i < str1.length; i++) {
      concatStr.push(str1[i])
    }
  }
  console.log(concatStr.join(''))
}

concatStr('abcv', 'ra;a;fsljd')

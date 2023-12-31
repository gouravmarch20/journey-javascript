// m1 -> reduce array methord
//m2 -> hasOwnProperty spelling mistake --> Own ka Owm
//m3 -> reduce require return , same datatype

const printMostRepetedCharcter = sentence => {
  let max = { letter: '', count: -1 }

  const trackOfCharacters = [...sentence].reduce((acc, current) => {
    return {
      ...acc,
      [current]: acc.hasOwnProperty(current) ? acc[current] + 1 : 1
    }
  }, {})
  for (const [key, count] of Object.entries(trackOfCharacters)) {
    if (count > max.count) {
      max = { ...max, letter: key, count }
    }
  }
  console.log(max)
}
printMostRepetedCharcter('aabbbbcc')

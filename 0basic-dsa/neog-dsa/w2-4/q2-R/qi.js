// m1 - how to format date ==> new Date() - forgot using ()
// m2 - terniary operator not require return keyword
const formatDate = date => {
    let newDate = ''
    let splitDate = date.split('/')
    for (let i = 0; i < splitDate.length; i++) {
      if (i === 0) {
        newDate += splitDate[1] + '/'
      } else if (i === 1) {
        newDate += splitDate[0] + '/'
      } else {
        newDate += splitDate[i]
      }
    }
    return newDate
  }
  
  const minDate = (date1, date2) => {
    const newDate1 = formatDate(date1)
    const newDate2 = formatDate(date2)
    // console.log(newDate1)
    // console.log(newDate2)
    const newFormat1 = new Date(newDate1)
    // console.log(newFormat1)
    return new Date(newDate1) > new Date(newDate2)
      ? `min data ${date2}`
      : `min data ${date1}`
  }
  
  console.log(minDate('02/05/2016', '24/11/2022'))
  
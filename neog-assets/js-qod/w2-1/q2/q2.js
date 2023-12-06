
// l1> split is going to return array -> by we retun 0 item of it -> it has return value
//l2 : clean code
const removeTimeFormDate = str => str.split(',')[0]
console.log(removeTimeFormDate('Wed April 26,7 pm'))

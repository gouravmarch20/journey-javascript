let arrStr = ['nèha', 'hardik', 'éaster', 'chaitanya', 'spain']
const employe = () => {
  const sorted = arrStr.sort(function (str1, str2) {
    // ** str2.localeCompare(str1) ==> w1:  decending
    return str2.localeCompare(str1) // ==> ascending
  })
  return sorted
}
console.log(employe(arrStr))
console.log(employe(arrStr).reverse()) // w2 : decending

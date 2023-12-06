// forgot var have function level scope
function getFavColor () {
  var favColor2 = 'Yellow'
  let favColor1 = 'red'
}
getFavColor()
console.log(favColor2)

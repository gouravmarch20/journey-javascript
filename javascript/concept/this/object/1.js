
function displayAge () {
  console.log(23, this)
}
displayAge()
// displayAge
// *** behind the scene --> so this point to window object 
window.displayAge.call()
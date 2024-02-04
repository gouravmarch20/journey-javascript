const typeOfTriangle = (a1, a2, a3) => {
  if (!(a1 + a2 + a3 === 180)) {
    return 'not a triange'
  } else if (a1 === a2 && a2 === a3) {
    return 'eqivalent triange'
  } else if (a1 === a2 || a2 === a3 || a3 === a1) {
    return 'issocelus triange'
  } else {
    return 'scalent triange'
  }
}
console.log(typeOfTriangle(40, 120, 20))

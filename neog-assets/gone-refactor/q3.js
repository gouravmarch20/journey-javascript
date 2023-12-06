// infinite curring --> increse argument --> return sum ofit all 
//? false case when no argument passed auto run defalt value
function add (a) {
  return function (b) {
    if (b) return add(a + b)
    return a
  }
}

console.log(add(2)(5)(43)())

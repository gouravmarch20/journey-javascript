// function a -> acessing varible from outer envirnonment ==> lexical scoping

// closure -> as per E.C concept the create varible should destroyed => but we able to acess that function  later because gc knew it is taking ref so it not remove from
// ?  it will save same logic re-run as only called function getting run rest not all it's upper function

//! TODO: getting proplem using arrow operator
function a () {
  let a = 5

  return function b () {
    return a
  }
}
const fun2 = a()
console.log(fun2())



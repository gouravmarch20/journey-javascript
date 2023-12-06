// composition polyfill
// TODO: KNEW what is function https://www.youtube.com/watch?v=abbdJ4Yfm54&t=535s
function addFive (a) {
  return a + 5
}
function subTwo (a) {
  return a - 2
}
function mulFour (a) {
  return a * 4
}
const evaluate = compose(addFive, subTwo, mulFour)

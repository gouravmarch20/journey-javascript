// ? explicit binding methords / FUNCTION BORROWING methords  ==> not default we did it by ==> call , bind , apply
// ! create as many object  ==> use the  object fuction in other object ==> FUNCTION BORROWING METHORD
function ask () {
  console.log('ask', this.mentor)
}
var mentorOne = {
  mentor: 'akanksha'
}
var mentorTwo = {
  mentor: 'tanay'
}
ask.call(mentorOne)
ask.call(mentorTwo)

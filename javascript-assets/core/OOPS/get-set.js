
// set / get -> fc not need
class Players {
  #score = 313
  constructor (name, score, playedMatch, noOfCentury) {
    this.#score = score
    this.name = name
    this.playedMatch = playedMatch
    this.noOfCentury = noOfCentury
  }
  print () {
    console.log(this.#score)
  }

//   get getNoOfCentury = console.log(this.score);
  set setNoOfCentury (noOfCentury) {
    this.noOfCentury = noOfCentury
  }
}

const obj1 = new Players('sachin', 201, 55)
console.log(obj1) //** not get private varible
obj1.setNoOfCentury = 900
console.log(obj1)

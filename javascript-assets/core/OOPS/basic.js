class Players {
  // private var by #
  #alpha = 313
  constructor (name, score , playedMatch) {
    this.#alpha = score
    this.name = name
    this.playedMatch = playedMatch
  }
  print () {
    console.log(this.#alpha)
  }
  #printOne () {
    console.log(this.#alpha)
  }
}

const obj1 = new Players('sachin', 201 , 55)
console.log(obj1)//** not get private varible
console.log(obj1.print())

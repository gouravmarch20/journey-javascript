class Hero {
  constructor (heroName) {
    this.heroName = heroName
  }
  logName () {
    if (!this.heroName) {
      console.log(
        'setTimeout left side empty so this point   --> window object '
      )
    }
    console.log(this.heroName)
  }
  logNameArrow = () => {
    console.log(this.heroName)
  }
}
const batman = new Hero('batman')

setTimeout(batman.logName, 1000)
console.log('by bind-->')
setTimeout(batman.logName.bind(batman), 1000)
setTimeout(batman.logNameArrow, 1000)
// console.log(batman)

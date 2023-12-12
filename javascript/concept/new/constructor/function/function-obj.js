// define once reuse again and agiain --> avoid repetaing / easy change //** create template

const wwePlayers = (weight, height, power, quote) => {
  tempObj = {
    weight,
    height,
    power,
    // ** focus
    quote: () => {
      console.log(quote)
    }
  }
  return tempObj
}
const romanRange = wwePlayers(100, 160, 34, 'powerhouse')
const underTaker = wwePlayers(98, 170, 39, 'the dead man')
// ---
console.log(romanRange)
romanRange.quote() // we had return simple object
console.log(romanRange.constructor) // normal object  return , so Object is created by Object constructor

/* 
- new working



const WwePlayers = new Object({

})
const roman = new WwePlayers(1 , 'git')
*/

console.log('----- end of code --------')
// ---
// console.log(underTaker)
// underTaker.quote()

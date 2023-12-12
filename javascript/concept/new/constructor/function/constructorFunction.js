// no need to return object
// template ki help sai create object 
function WwePlayers (weight, height, powerlevel, quote) {
  this.weight = weight
  this.height = height
  this.powerlevel = powerlevel
  this.quote = () => {
    console.log(quote)
  }
}
const brockLesnar = new WwePlayers(234, 56, 66, 'the suplex city ')
console.log(brockLesnar)
brockLesnar.quote()//prototype -> constructor create object , prototype mai added his created object
console.log(brockLesnar.constructor)// ** tell function who create 


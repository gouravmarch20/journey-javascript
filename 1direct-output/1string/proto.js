const alpha = ""
const names = "Lydia"

console.log(alpha.giveLydiaPizza())
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!"
}

console.log(names.giveLydiaPizza())

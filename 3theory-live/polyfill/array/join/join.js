Array.prototype.split = function (separator) {
  // Use comma as separator if it's not specified
  separator = separator || ","

  let str = ""

  for (let i = 0; i < this.length; i++) {
    str += this[i]
    if (i < this.length - 1) {
      str += separator
    }
  }
  return str
}
const arr = ["git", "rin"]
const res = arr.split("--")
console.log(res)

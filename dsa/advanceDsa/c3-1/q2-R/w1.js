// slice -> start ko include , end ko exclude
String.prototype.substring = () => {
  let subset = []
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      subset.push(this.slice(m, n))
    }
  }
}
console.log('neog'.subString())

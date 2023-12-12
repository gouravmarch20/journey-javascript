function Animai (size, speed) {
  this.size = size
  this.speed = speed
}
const arr = []
for (let i = 0; i < 10; i++) {
  arr.push(new Animai(Math.ceil(Math.random() * 100), 21))
}
console.log(arr)
const funOne = new Animai(13, 2)
console.log(funOne.speed)

console.log(funOne.constructor)

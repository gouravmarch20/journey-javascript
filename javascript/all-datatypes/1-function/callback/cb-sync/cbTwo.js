const iAlived = () => {
  console.log('Ya i am alive ')
}
const iDied = () => {
  console.log('thanos killed me ,  itc will hit 600 in upcoming years')
}

console.log("2");
const willThanosKillMe = (name, iAlived, iDied) => {
  const decided = name.length % 2
  decided ? iDied() : iAlived()
}
willThanosKillMe('gourav', iAlived, iDied)
console.log("3");
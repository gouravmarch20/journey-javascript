const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise resolve ")
  }, 5000)
})
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise resolve ")
  }, 2000)
})

async function hello() {
  const val1 = await p1
  console.log("by await - 5s", val1)
  const val2 = await p2
  console.log("by await 2s", val2) //^no wait for 2sec more --> no code block , line by line code execute
}

hello()
console.log("end")
setTimeout(() => console.log("hello there"), 1000)

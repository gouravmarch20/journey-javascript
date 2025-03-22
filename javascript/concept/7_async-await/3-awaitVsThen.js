//* function mai wrap for await keyword , thus promise too to show diff
const p = new Promise((res, rej) =>
  setTimeout(() => {
    res(6)
  }, 1000)
)

// ? async
async function hello() {
  const val = await p
  console.log("by await", val)
}
//? then catch ==> below code no pause
function hello() {
  p.then((res) => {
    console.log("by then ", res)
    console.log("what i want -> fd || bd || fsd")
  })
  console.log("time , tide & javascript wait for none ")

}
hello()

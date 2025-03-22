const p = new Promise((res, rej) => res(6))
async function hello() {
  const val = await p
  console.log(val)
}
hello()

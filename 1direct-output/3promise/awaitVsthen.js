const myPromise = () => Promise.resolve("I have resolved!")

function firstFunction() {
  myPromise().then((res) => console.log("then ", res))
  console.log("second")
}

async function secondFunction() {
  console.log("await ",await myPromise())
  console.log("second")
}

firstFunction()
secondFunction()

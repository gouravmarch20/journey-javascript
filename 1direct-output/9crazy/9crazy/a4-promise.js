const myPromise = () => Promise.resolve("I have resolved!")

function firstFunction() {
  myPromise().then((res) => console.log("then ", res))//2
  console.log("1")//1
}

async function secondFunction() {
  console.log("await ",await myPromise())//3
  console.log("2")//4
}

firstFunction()
secondFunction()
 
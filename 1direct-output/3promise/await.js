async function getData() {
  const res =  await Promise.resolve("I made it!")
  console.log("await");
  return res
}

const data = getData()
console.log(data)
data.then(res => console.log(res))

//? The await still has to wait for the promise to resolve: a pending promise gets returned when we call getData() instant --->  await task done , return fulfilled promise .then run 
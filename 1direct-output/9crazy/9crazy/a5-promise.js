async function getData() {
  const res = await Promise.resolve("I made it!")
  console.log("await")//2 
  return res
}

const data = getData()
console.log(data)//1 unde

data.then((res) => console.log(res))//3

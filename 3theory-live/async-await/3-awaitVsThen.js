const p = new Promise((res, rej) => res(6))

// ? async
async function hello() {
  const val = await p
  console.log("by await" , val)
}
//? then catch ==> below code no pause 
p.then(res => {
    console.log( "by then " , res);
    console.log("time , tide & javascript wait for none ");
})


hello()

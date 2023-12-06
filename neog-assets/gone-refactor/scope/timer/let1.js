for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
// every time it run new scope of let create 
// TODO: visulazi in EC
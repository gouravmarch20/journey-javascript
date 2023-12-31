const printDelayOne = delay => {
  console.log('--- exapmle with coustom delay in each ========== ')
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, delay * i)
  }
}
printDelayOne(1000)

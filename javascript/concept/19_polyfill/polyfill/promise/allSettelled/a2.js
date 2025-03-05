function asyncChallenge() {
    // Log synchronous code first
    console.log("Task 1: Synchronous code")
    const resoleP = new Promise((res , rej) => {
      res()
    })
    resoleP.then(()=>{
      console.log("Task 2: Promise resolved")
      setTimeout(()=>{
            console.log("Task 2: Promise resolved")
  
      },0)
    })
  }
  asyncChallenge()
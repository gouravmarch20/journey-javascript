const myObj = {
    myMethod () {
      console.log(this) //** myObj */
      const callback = () => {
        console.log(this) //**myObj */
      }
      setTimeout(callback, 0) //window function
    }
  }
  
  myObj.myMethod()
  
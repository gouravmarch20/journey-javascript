const myobj = {
    myMethord () {
      console.log(this) //** myobj */
      const callback = () => {
        console.log(this) //**myobj */
      }
      setTimeout(callback, 0) //window function
    }
  }
  
  myobj.myMethord()
  
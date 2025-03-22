function example() {
    console.log(this === globalThis); // true
  
    function inner1() {
      console.log(this === globalThis); // true
    }
    inner1();//* same run not call by any other function --> so window sai call 
  }
  example();
  
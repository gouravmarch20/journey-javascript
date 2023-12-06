function a() {
   'use strict'; // see strict mode
    return this;
  }
 
 console.log(a());//In strict mode if the value of this is not set at the execution time then it is undefined.


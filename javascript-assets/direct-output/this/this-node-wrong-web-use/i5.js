function a() {
   'use strict'; // see strict mode
    return this;
  }
 
 console.log(new a());//Every time a function is called as constructor the value of this inside it is set as empty object.


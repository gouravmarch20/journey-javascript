// ?  IIFE => {}
// wrap &  imidetely invoked
//  can not be invoked later to invoke later we can wrap it by cb ()=>
// hosting take place like normal => memory create , then execution phase 


;(function (words) {
    console.log(words)
  })('hello world')
  
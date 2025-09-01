// we can access innerFunction variable later ,gc not remove that variable 
// closure are created whenever a new function is created

// lexical scope :  child ask to parent  if not inside in its scope -->  
/*
//** closure scope chain -> ref notes
 Every closure has 3 scope => child can ask to parent
 - local
 - outer -> 
 - global ->  window
*/
/* - application of closure 
 1.  access the variable value --> of it's outer function ==> because GC not remove that variable => it able to knew that below some one is referencing it  
 2. function to have private variable 
 3. data hiding 
 4. module paten 
 5. function curring 
 6: some hof (memorize) 
*/


// overconsumption of memory --> every time memory for are not garbage collected till program
// free browser -> 

//! garbage collector -->memory     not free that varible  until need 
// , currently smartly collectedly garbage collect : if varible for cloure  
// program in browser , freeze utilize  , 
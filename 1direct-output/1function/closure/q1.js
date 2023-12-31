// var has function level scope so it will update same i varible in each itteration
// after webTime limit end -> cb -> event loop -> ec mai acess i varible

// ** for loop has runned , later setTimeOut acess i and acessing latest one
for (var i = 0; i < 3; i++) {
  setTimeout(
    () => console.log('i: ', i), //! closure formation
    2000
  )
}
/*
for loop i - 0 >> see setTime out -> pass to webApi 
for loop i - 1 >> setTimeOut -> pass to webApi 
and so on 

? for loop not stop because setTime out is aync 
for loop end 

after 3 sec ==> webApi start sending setTimeOut funciton in callback queue 
event loop pick 1 by function 

//** fuction define come in EC and start executing  
*/
/*
* LOOP DEEP DRIVE

? i = 0
var i = 0 --> var i = 1
? i = 1 
at i = 1 --> i = 1
so at i = 0 --> i = 1//! var function level scope update in i will apper here also 
? i = 2 
at i = 2 --> i = 2
so at i = 0 --> i = 2
so at i = 1 --> i = 1
? i = 3 >>>> web api i - 0 , i -1 , i -2 ==> coming and acessing i value
at i = 3 --> i = 3
so at i = 0 --> i = 3
so at i = 1 --> i = 3
so at i = 2 --> i = 3

*/

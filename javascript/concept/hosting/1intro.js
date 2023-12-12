
// ! varible , function both store in window as key & value form
// hosting initalization do , varible  mai undefined asign & function mai function Defined asign
/*
- Hosting : function mai function define store , if var then undefined he asign

- GC : hosting run && in each E.C --> phase 1 : mai hosting run  phase 2 : code run in sync way 

*/

// ? FUNCTION
// arrow function : like varible --> var hosted & asign undefined , const / let --> temp dead zone
//traditional function  :  function define name ka key mai that fd  assing
/*
- *** in execution context - 2 phase

 1. creation phase ==> window object ,set memory head -> and store in window object not here no value is assigned to a varible / function  , inatilize  with undefined all varible &&  function mai function define asign 
 2. execution phase ==> execute code line by line asign value to varible & skip FD -> FC mai run FD, if any function trigger new E.C created ==> same phase creation then execution 



*/

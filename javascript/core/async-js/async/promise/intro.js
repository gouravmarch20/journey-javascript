// Promise have 1 cb function & that cb function has two argument as function
// Promise return another promise  ---> we handle //** .then , catch 
//** promise handling done in async way not promise creation */
//finally run -> in both case not reject / resolve
 


// *** 
//  promise are use to handle async action in js it return new promise

// it has 3 stage --> fullfill , reject , pending

/*

 : avoid thead block 
----> two part mai break
   - a promise code ==> new promise 
- b   promise resolve  or promise consuming code ==> .then.catch 

 */


// ! promise types 
//  promise all/ allsettled / rare  ---> when 2 or more promise working parallely

// - .all : when all get resolved then return all result , even 1 fail --> tell all promise failled 
// .allsettled : give result always atlast , & tell what passed what failed --> passed ka data we acess
//.race : if 3 promise are hit ==> the promise which result get resolved first it return that first rest not return

// *** application
// race --> server hitting --> which server aceess to give uk , in ===> cdn pick
// all --> when dependency --> of one promise to other 
// allSettled --> no dependecy ==> avoid fail response / print fullfill case 
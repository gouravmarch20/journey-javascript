// ** closure : remember the ref of varible --> each varible is new --> so rember all
//? let have block scope -> i++ asign value to it --> for each loop it's a new varible in each itteration
/*  DRY RUN

- i = 0 , setTimeOut go to webApi i var as ref --> i= 1 asing to new varible  ==> i = 0 varible destroyed
- i : 1 -> setTime Async run , take ref of i --> i = 2 createf &  i destroyed 

*/
const printDelay = delay => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, delay)
  }
}
printDelay(1000)

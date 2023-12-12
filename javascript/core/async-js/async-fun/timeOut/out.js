//l1>> function wrap & as args pass in cb
const printName = ( name , cases='p') => {
  console.log(`my name ${name} - ${cases} `)
}
// setTimeout(printName('gourav'), 1000)//function call instant invoke
setTimeout(() => printName('gourav'), 1000) //w1
setTimeout(printName, 2000 , 'gitman' , 'dev cases') //w1
// return id of it , by using clearIterval if we clear that id that function no run in main stach & code not show
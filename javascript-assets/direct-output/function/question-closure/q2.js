
// ! let block scope > but code is inside block so i = 0/1/2/3 ==> due to increment operator ===> but i is lossing it's value in each itteration
// TODO: IN EC
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log('i: ', i)
  })
}
/*
i = 0  >> 
i = 1 >> let block scope , so new scope will create for i var 
 


*/ 
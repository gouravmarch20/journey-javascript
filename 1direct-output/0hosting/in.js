/*
1. hosting 
 var myName -> set undefine 
 function call tellName ->  mai store function define 

 ? in it's global context / scope it asign ==>  varible / function there
2 . code execution 
2 a > var myName asign = gourav 
2 b i > functionCall ==> hosting run for new context ==>  var myName set undefined , no function so avoid / 1 varible only in this context

2 b ii > now function tellName run & in clg it try to print hisName name value not find value in it's context so ask from it's parent context hence print bill acaman 
2 b iii > clg myName due to hosting it has assigned undefined so it print undefined 

2 b iv>  now it var myName he asign the given value 




*/
var hisName = "bill acmana";
var myName = "gourav";
const tellName = () => {
  console.log(hisName);

  console.log(myName);
  var myName = "gitman  - gohan ";

  console.log(myName);
};
console.log(myName);
tellName();

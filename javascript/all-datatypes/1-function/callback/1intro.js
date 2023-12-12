// callback function -> a function passed to another function as an argument that argument that passed as function called callback function && that function can be invoked later || the function that pass as argument in Hof is called callback function ==> inbuild methord cb function

//  predefined cb function >> map , filter , reduce , settimeout , event lister
//? need of  coustom cb function : we can create our owm callback function ==> and when core task complete then we run cb function

// ! async or sync --> task depend on the function which it has been called

// map --> 1 cb  function --> contain 3 arguments===> sync run
// filter --> 1 cb function ===> sync run
// promise --> 1 cb function it has 2 function resolve & reject ===> sync run

/// setTimeout/ setTimeInterval  ===> async run --> it go to webapi after timeout  --> callback function run in callback queue

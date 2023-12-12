// 1. data privacy not accessible to outer scope
//2.  variable overlapping issue resolve
//  var in iffe not fall in GC -> each function has owm ec

var a = 5
;(function (word1, word2) {
  console.log(a)
  var prefix = 'we are' //** 1
  var prefixOne = ' learning iffe' //** 2
  console.log(word1, word2, ' --->  ', prefix, prefixOne)
})('hello ', 'world')

// console.log(prefix);// ** 1

console.log(prefixOne) //?

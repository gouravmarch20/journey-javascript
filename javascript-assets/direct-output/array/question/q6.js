// 
const input = [
    ['a', 'b', 'c'],
    ['d', 'e', 'g'],
    ['h', 'd', 'f'],
]
console.log( input.reduce((p , c) => [...p , ...c] , []) )
// l1> split behavior -> sokit if he find else just wrap in array
const arr = ['hii', '', '', 'We', 'are', '', 'neoGrammers', '', '', '']

console.log(arr.join())// only datatype change //! best visulize :: each item having no space not able to see in string --> but , has not been remove as no find case found
// ! replace case ==> remove , 
console.log(arr.join('')) //** after each item add no-space/nothing && in string empty space array item remove as it represent nothing 
console.log(arr.join(' '))//after each item add space
console.log(arr.join('-klj-')) // after each item it will add
console.log(arr.join('are')) // after each item it will add

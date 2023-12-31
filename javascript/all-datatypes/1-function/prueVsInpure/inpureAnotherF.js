const area = (s) => {
console.log(s);//^ impure ::: because invoke another function , cl:: work can change ==> 
    return s*s
 };
 console.log(area(4));
const array = ["orange", " green  ", "yellow"];
console.log(array.reduce((p, c, i) => ({ ...p, [i]: c }), {}))
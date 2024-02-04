console.log(1);
const p = new Promise((res , rej) => {
    console.log("1");
    // ? async
    res(4)

})
console.log(2);
//? handling async
p.then(res => console.log(res))
console.log(3);

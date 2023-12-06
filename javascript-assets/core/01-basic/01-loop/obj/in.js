//  to print obj value directly

const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
    console.log(`${key} ===> can acess direct value of object ------->   ${object[key]}`);
}
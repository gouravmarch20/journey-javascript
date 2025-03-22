function test() {
    a = 10; // if No var, let, or const ==> in window it asign
}
test();
console.log(a); // 10 (exists globally!)


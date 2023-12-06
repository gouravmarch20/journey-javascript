// async syntic sugar of promise , return promise
const hello = async () => 'hello'


console.log(hello);
console.log(hello());
hello().then(data => console.log(data))
hello().then(console.log)//shortcut -> print coming value

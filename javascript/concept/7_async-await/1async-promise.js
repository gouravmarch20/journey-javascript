async function hello() {
  return 5
}
console.log(hello())
hello().then(res => console.log(res))
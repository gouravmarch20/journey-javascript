// arguments  : reserved work => for each execution context

function a(x, y) {
    console.log(arguments)// as object
    console.log(Array.from(arguments))//as array
}
a('hi', 'hitman')
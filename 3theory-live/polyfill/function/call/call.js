function bind(func, thisArg) {
    return function() {
        return func.apply(thisArg, arguments)
    }
}
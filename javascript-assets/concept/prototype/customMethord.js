
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}
console.log(new Date('2022-3-10').lastYear())
Array.prototype.map = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i]) + ' mmit')

    }
    return arr
}

console.log([1, 4, 6].map())
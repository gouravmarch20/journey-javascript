const flatArr = (arr) => {
    const stack = [...arr]
    const res = []


    while (stack.length) {
        const first = stack.shift()
        if (Array.isArray(first)) {
            stack.unshift(...first)
        }else{
            res.push(first)
        }
    }
    return res

}
const arr = [1, 2, [3, 4], [[5, 7]]]
console.log(flatArr(arr))

const flatArr = (arr) => {
    const stack = [...arr]
    const res = []
    console.log(stack);
    while (stack.length) {
        console.log(stack);

        const last = stack.pop()
        if (Array.isArray(last)) {
            stack.push(...last)
        }else{
            res.push(last)
        }
    }
    console.log(7 , res);
}
const arr = [1, 2, [3, 4], [[5, 7]]]
console.log(flatArr(arr))

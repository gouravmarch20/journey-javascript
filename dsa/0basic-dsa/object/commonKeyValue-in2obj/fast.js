//* O(N)
//& O(noOfCommonKey&Val || n )

const findCommon = (obj1, obj2) => {
    const ans = {}
    for (const key in obj1) {
        if (obj1[key] === obj2[key]) {
            ans[key] = obj1[key]
        }
    }
    return ans
}
const obj1 = { a: 1, b: 3, c: 5 }
const obj2 = { b: 3, c: 100 }

console.log(findCommon(obj1, obj2))

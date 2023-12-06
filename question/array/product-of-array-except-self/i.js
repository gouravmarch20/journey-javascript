const numbs = [1, 2, 3, 4]
const numbsOne = [-1, 1, 0, -3, 3]

const productOfArrayExceptSelf = numbs => {
  const leftProduct = []
  const rightProduct = []
  const productAllWithoutSelf = []
  let tempRightProduct = 1
  let tempLeftProduct = 1
  for (let i = 0; i < numbs.length; i++) {
    tempLeftProduct = (rightProduct[i - 1] || 1) * numbs[i]
    rightProduct.push(tempLeftProduct)
  }
  for (let i = numbs.length - 1; i >= 0; i--) {
    tempRightProduct = (leftProduct[i + 1] || 1) * numbs[i]
    leftProduct[i] = tempRightProduct
  }

  for (let i = 0; i < numbs.length; i++) {
    const tempResult = (rightProduct[i - 1] || 1) * (leftProduct[i + 1] || 1)
    productAllWithoutSelf.push(tempResult)
  }
  console.log(productAllWithoutSelf)
  console.log(leftProduct)
  console.log(rightProduct)
  // return productAllWithoutSelf
}
console.log(productOfArrayExceptSelf([...numbsOne]))

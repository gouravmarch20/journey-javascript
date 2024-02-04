const numbs = [1, 2, 3, 4]
const productOfArrayExceptSelf = numbs => {
  const productArr = []
  for (let i = 0; i < numbs.length; i++) {
    let product = 1
    for (let j = 0; j < numbs.length; j++) {
      if (i === j) {
        continue
      }
      product = product * numbs[j]
    }
    productArr.push(product)
  }
  return productArr
}
console.log(productOfArrayExceptSelf([...numbs]))

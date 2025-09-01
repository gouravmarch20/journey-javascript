const productAddedToCart = [
  {
    _id: 'f565182d-3914-4157-8bd5-83d99d457187',
    title: 'Classmate octane',
    brand: 'classmate',
    price: 711, //track 1
    priceMrp: 830, // track 2
    categoryName: 'copy',
    inStock: 12,
    noOfItemInCart: 3 // track 3
  },
  {
    _id: 'f565182d-3914-4157-8bd5-83d99d457190',
    title: 'link octane',
    brand: 'ocea',
    price: 300,
    priceMrp: 830,
    categoryName: 'pen',
    inStock: 12,
    noOfItemInCart: 10
  }
]
const detail = productAddedToCart.reduce(
  (acc, curr) => ({
    ...acc,
    price: (curr.price + acc.price) * curr.noOfItemInCart,
    priceMrp: (curr.priceMrp + acc.priceMrp) * curr.noOfItemInCart,
    totalItemAddedToCart: curr.noOfItemInCart + acc.totalItemAddedToCart,
    totalDiscount:
      acc.totalDiscount +
      (curr.priceMrp * curr.noOfItemInCart - curr.price * curr.noOfItemInCart)
  }),
  {
    price: 0,
    priceMrp: 0,
    totalItemAddedToCart: 0,
    totalDiscount: 0
  }
)

console.log(detail)

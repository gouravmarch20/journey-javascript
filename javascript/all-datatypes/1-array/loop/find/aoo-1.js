const cartItems = [
  {
    _id: '31a9f093-5632-47ca-8b6f-20ec15c5c4da',
    title: 'Classmate octane',
    brand: 'classmate',
    price: 711,
    priceMrp: 830
  },
  {
    _id: '26d84e45-bfff-4438-98c2-79cdde87da9d',
    title: 'link ocean',
    brand: 'link',
    price: 399,
    priceMrp: 400
  },
  {
    _id: '07ed98c9-b6b4-491d-8816-5e71a13f267b',
    title: 'Reynolds  ',
    brand: 'Reynolds',
    price: 233,
    priceMrp: 530
  },
  {
    _id: 'b5a60bbe-5b1f-4cf0-b685-a3ce36f96759',
    title: 'subconscious ',
    brand: 'pi-pack',
    price: 450,
    priceMrp: 600
  }
]

const productList = [
  {
    _id: '9574b7be-bde1-4b4f-8de4-3a7e4c4c38ce',
    title: 'arihant reasoning',
    brand: 'arihant',
    price: 911,
    priceMrp: 1530
  },
  {
    _id: '31a9f093-5632-47ca-8b6f-20ec15c5c4da',
    title: 'Classmate octane',
    brand: 'classmate',
    price: 711,
    priceMrp: 830
  },
  {
    _id: '07ed98c9-b6b4-491d-8816-5e71a13f267b',
    title: 'Reynolds  ',
    brand: 'Reynolds',
    price: 233,
    priceMrp: 530
  },
  {
    _id: '26d84e45-bfff-4438-98c2-79cdde87da9d',
    title: 'link ocean',
    brand: 'link',
    price: 399,
    priceMrp: 400
  },
  {
    _id: '7b20a644-95d0-4f13-8c80-b4813c96eea4',
    title: 'atomic habits',
    brand: 'pi-pack',
    price: 459,
    priceMrp: 500
  },
  {
    _id: 'b5a60bbe-5b1f-4cf0-b685-a3ce36f96759',
    title: 'subconscious ',
    brand: 'pi-pack',
    price: 450,
    priceMrp: 600
  },
  {
    _id: '696c070b-bb84-4375-8830-9ebd0d427f87',
    title: 'classmate diary',
    brand: 'classmate',
    price: 699,
    priceMrp: 800
  }
]

productList.map(product => {
  const isAddedToCart = cartItems.find(
    cartProduct => product._id === cartProduct._id
  )

  isAddedToCart
    ? console.log(`${product.title}  ---  view cart btn active`)
    : console.log(`${product.title}  *** add to cart btn active`)
})

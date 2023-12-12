const productList = [
  {
    _id: 'b6058d38-6791-486c-bb5f-dda1dc67b8e7',
    title: 'arihant reasoning',
    brand: 'arihant',
    price: 911,
    priceMrp: 1530,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 2.6,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kbcjpu80/book/1/0/3/a-new-approach-to-reasoning-verbal-non-verbal-original-imafspq636zdqwea.jpeg?q=70',
    id: '1'
  },
  {
    _id: '2aa41126-b3bd-429c-90f4-7dbb54f57559',
    title: 'Classmate octane',
    brand: 'classmate',
    price: 711,
    priceMrp: 830,
    categoryName: 'copy',
    inStock: 12,
    featured: true,
    rating: 3.6,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kksmikw0/diary-notebook/v/6/u/navneet-youva-soft-bound-long-book-feminine-series-17x27-cm-original-imagy2cyaavhrbda.jpeg?q=70',
    id: '2'
  },
  {
    _id: 'c9a57cf5-b40e-48c2-b1e7-7653f4746e0d',
    title: 'Reynolds  ',
    brand: 'Reynolds',
    price: 233,
    priceMrp: 530,
    categoryName: 'pen',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/ktuewsw0/pen/n/0/9/2083295-reynolds-original-imag73htv9xkh4ud.jpeg?q=70',
    id: '3'
  },
  {
    _id: 'fd162950-db94-458f-9ced-eb7523adb830',
    title: 'link ocean',
    brand: 'link',
    price: 399,
    priceMrp: 400,
    categoryName: 'pen',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: false,
    imageSrc: './assets/pen/link.webp',
    id: '4'
  },
  {
    _id: 'bcaea037-2baf-4677-9a16-cea4aec1516a',
    title: 'atomic habits',
    brand: 'pi-pack',
    price: 459,
    priceMrp: 500,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70',
    id: '5'
  },
  {
    _id: '61cb5d44-d009-4a87-bba2-b55a6da2ca5d',
    title: 'subconscious ',
    brand: 'pi-pack',
    price: 450,
    priceMrp: 600,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 3.1,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/ki214sw0-0/book/n/w/g/the-power-of-your-subconscious-mind-original-imafxxvxsgzgd7gq.jpeg?q=70',
    id: '6'
  },
  {
    _id: 'fc391900-3eb3-4415-b03e-2a989769f774',
    title: 'pratical notebook',
    brand: 'classmate',
    price: 259,
    priceMrp: 300,
    categoryName: 'copy',
    inStock: 12,
    featured: false,
    rating: 3,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/khf63680/diary-notebook/r/4/b/classmate-02001283qqdm-original-imafxft8gg5ab5vf.jpeg?q=70',
    id: '7'
  },
  {
    _id: 'f302d237-25fb-4ce9-8051-5bf23ab57106',
    title: 'math class 10',
    brand: 'ncert',
    price: 390,
    priceMrp: 700,
    categoryName: 'book',
    inStock: 12,
    featured: false,
    rating: 4,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/regionalbooks/n/n/n/ncert-mathematics-books-set-class-6-to-10-english-medium-original-imaftk93xf2upfbg.jpeg?q=70',
    id: '8'
  },
  {
    _id: 'fadd5d3f-b411-42bc-98e1-dd05d9979914',
    title: 'luxor notebook A4',
    brand: 'luxor',
    price: 899,
    priceMrp: 1500,
    categoryName: 'copy',
    inStock: 12,
    featured: false,
    rating: 3,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/k4a7c7k0/diary-notebook/h/y/z/luxor-9000028346-original-imafn7shggzmhws7.jpeg?q=70',
    id: '9'
  },
  {
    _id: '4605b0e3-07d0-43ea-a290-f57b5c825313',
    title: 'classmate diary',
    brand: 'classmate',
    price: 699,
    priceMrp: 800,
    categoryName: 'copy',
    inStock: 12,
    featured: true,
    rating: 2.1,
    cashOnDelivery: true,
    noOfItemInCart: 1,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/jynat8w0/diary-notebook/h/j/g/classmate-2001235-original-imafgu2fhd94ujfe.jpeg?q=70',
    id: '10'
  }
]

const allCategoryName = productList.map(product => product.categoryName)//value what to filter
// console.log(allCategoryName);
console.log(new Set(allCategoryName))
console.log([...new Set(allCategoryName)])//** widely need array to array unique --> map again */

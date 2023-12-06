// if simple array -> arr.sort() --> means arr.sort((a , b ) => a- b)
const companies = [
  { name: 'google', category: 'Product Based', start: 1991, end: 2004 },
  { name: 'Amazon', category: 'Product Based', start: 1891, end: 2004 },
  { name: 'Paytm', category: 'Product Based', start: 2001, end: 2004 },
  { name: 'Coforge', category: 'Service Based', start: 1971, end: 2004 }
]
const sortedByStarDateDecending = companies.sort((c1, c2) => {
  if (c1.start < c2.start) {
    return 1
  } else {
    return -1
  }
})
const sortedByStarDateAssending = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
)
// console.log(sortedByStarDateDecending)
console.log(sortedByStarDateAssending)

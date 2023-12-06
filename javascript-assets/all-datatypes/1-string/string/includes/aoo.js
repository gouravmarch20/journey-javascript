const brands1 = [
  { id: '0a', brandName: 'puma' },
  { id: '0b', brandName: 'adiddas' },
  { id: '0c', brandName: 'wildcraft' },
  { id: '0d', brandName: 'levis' },
  { id: '0e', brandName: 'celio' }
]

const filter = brands1.filter(item => item.brandName.includes('a'))
console.log(filter)

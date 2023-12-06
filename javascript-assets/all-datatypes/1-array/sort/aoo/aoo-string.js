const arr = [
  { name: 'xeron', price: 12, category: 'advanced' },
  { name: 'goku', price: 12, category: 'advanced' },
  { name: 'vegeta', price: 12, category: 'advanced' },
  { name: 'dixon', price: 12, category: 'advanced' },
  { name: 'railtel', price: 12, category: 'advanced' }
]

const sortAscending = ({ type }) => {
  if (type === 'ascending') {
    const sorted = arr.sort((str1, str2) => {
      return str1.name.localeCompare(str2.name)
    })
    return sorted
  }
  if (type === 'decending') {
    const sorted = arr.sort((str1, str2) => {
      return str2.name.localeCompare(str1.name)
    })
    return sorted
  }
}
console.log(sortAscending({ type: 'ascending' }))
console.log(sortAscending({ type: 'decending' }))

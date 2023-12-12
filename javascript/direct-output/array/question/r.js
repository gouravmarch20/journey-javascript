const arr = [
  { name: 'gi', city: 3 },
  { name: 'gitman', city: 3 }
]
arr.map(i => {
  return { ...i, class: 32 }
})

console.log(arr);
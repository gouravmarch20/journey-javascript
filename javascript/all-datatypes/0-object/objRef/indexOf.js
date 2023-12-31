// ! because 2 object are never equal even it has same value -> pass by ref so here compare memory block not value

const aoo = [
  { name: 'v', pass: 3 },
  { name: 'g', pass: 12 }
]
console.log(aoo.indexOf({ name: 'v', pass: 3 }))

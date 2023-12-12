const family = [
   { name: 'jon', haveCycles: true },
   { name: 'tanay', haveCycles: false },
   { name: 'akansha', haveCycles: true },
   { name: 'zeron', haveCycles: true },
   { name: 'gouy', haveCycles: false },
]
const getHaveCycle = (p , c) => c.haveCycles ? [...p, c.name] : p

const haveCycle = family.reduce(getHaveCycle, [])
console.log(haveCycle)

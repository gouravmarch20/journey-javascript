let wm = new WeakMap()
const obj2 = { name: 'tiger ' }
const obj3 = { salary: 'io ' }
wm.set(obj2, 'Private')
wm.set(obj3, 'Private data')
console.log(wm);
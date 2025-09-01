let ws = new WeakSet()
const obj = {}
const obj2 = { name: 'tiger ' }
const obj3 = { salary: 'io ' }
const obj4 = { io: 'io ' }
const obj5 = { name: 'io ' }
ws.add(obj2)
ws.add(obj3)
ws.add(obj4)
ws.add(obj5)
console.log(ws)

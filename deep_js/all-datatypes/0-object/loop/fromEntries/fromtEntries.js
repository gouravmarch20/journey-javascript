const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
])

const obj = Object.fromEntries(entries)

console.log(obj)

for (const key in obj) {
  console.log(key, "-", obj[key])
}

Object.entries(obj).map(([key, val]) => [key, val * 2])

let lunch = {
  sandwich: "turkey",
  chips: "cape cod",
  drink: "soda",
}

let entries = Object.entries(lunch)
console.log(entries)

for (let [key, item] of Object.entries(lunch)) {
  console.log(key, "---", item)
}

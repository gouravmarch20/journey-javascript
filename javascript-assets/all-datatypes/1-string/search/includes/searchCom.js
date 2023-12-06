const userInput = 'ba'
const searchResults = [
  'dixon',
  'bajaj finance',
  'baliji amines',
  'bajaj sugar',
  'affle',
  'ambar'
]
const seachRecommedation = []
searchResults.forEach(result => {
  if (result.toLowerCase().includes(userInput.toLowerCase())) {
    seachRecommedation.push(result)
  }
})
console.log(seachRecommedation)

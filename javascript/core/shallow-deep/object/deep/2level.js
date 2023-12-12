const developerOne = {
  name: 'gourav',
  skills: { primary: 'mern stack ', secondary: 'devop' }
}
const developerTwo = JSON.parse(JSON.stringify(developerOne))
developerTwo.name = 'javascript'
developerTwo.skills.primary = 'frontend dev'
console.log(developerOne)

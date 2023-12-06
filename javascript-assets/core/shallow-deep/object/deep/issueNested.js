const developerOne = {
  name: 'gourav',
  skills: { primary: 'mern stack ', secondary: 'devop' },
  // **
  joiningDate: new Date(),
  calculateAge: function () {
    return 30
  }
}
const developerTwo = JSON.parse(JSON.stringify(developerOne))
developerTwo.name = 'javascript'
developerTwo.skills.primary = 'frontend dev'
// console.log(developerOne)
console.log(developerTwo)//missing object
console.log(typeof developerTwo.joiningDate)//string

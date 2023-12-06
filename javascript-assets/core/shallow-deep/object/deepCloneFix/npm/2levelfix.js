const _ = require('lodash')

const developerOne = {
  name: 'gourav',
  skills: { primary: 'mern stack ', secondary: 'devop' },
  joiningDate: new Date(),
  calculateAge: function () {
    return 30
  }
}
const developerTwo = _.cloneDeep(developerOne)

developerTwo.name = 'javascript'
developerTwo.skills.primary = 'frontend dev'
console.log(developerOne)
console.log(typeof developerTwo.joiningDate)

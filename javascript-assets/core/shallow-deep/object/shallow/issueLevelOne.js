const developerOne = {
  name: 'gourav',
  address: {
    flatNo: '81/5'
  }
}
const developerTwo = { ...developerOne }
developerTwo.name = 'javascript'
developerTwo.address.flatNo = '898 shanghai , china'
console.log(developerOne)

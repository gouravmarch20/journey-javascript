const mailData = [
  {
    id: 1,
    mail: 'tanay@neog.camp'
  },
  {
    id: 2,
    mail: 'tanvi@neog.camp'
  }
]
console.log(mailData.concat({ id: Math.random(), mail: 'test@gmail.com' }))
console.log(mailData.concat({ id: Math.random(), mail: 'test@gmail.com' }))
console.log(mailData)//** no change

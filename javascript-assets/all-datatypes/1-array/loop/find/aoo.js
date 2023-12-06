const mailData = [
  {
    id: 1,
    mail: 'tanay@neog.camp'
  },
  {
    id: 2,
    mail: 'tanvi@neog.camp'
  },
  {
    id: 3,
    mail: 'akanksha@neog.camp'
  }
]
console.log(mailData.find(({ mail }) => mail === 'akanksha@neog.camp'))
console.log(mailData.find(m => m.mail)) // we had return 1 directly
console.log(mailData.find(m => m.mail === 'ak')) //not found
const coustomR = mailData.find(mail => {
  if (mail.mail === 'tanvi@neog.camp') {
    return mail
  }
})
console.log(coustomR)

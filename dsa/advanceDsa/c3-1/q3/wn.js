const protectEmail = email => {
  const indexNo = email.indexOf('@')
  return email.slice(0, indexNo / 2) + '...' + email.slice(indexNo)
}
console.log(protectEmail('akanksha@neog.camp'))

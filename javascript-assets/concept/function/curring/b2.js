const greatingMsg = greating => msg => ` ${greating} , say welcome ${msg}`

const userMessage = greatingMsg('trixoon')

// ! can be used later multiple times
console.log(userMessage(' gourav'))
console.log(userMessage('gotan'))

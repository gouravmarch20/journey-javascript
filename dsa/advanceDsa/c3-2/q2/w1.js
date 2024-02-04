// Solution 2
const inputName = 'Emperor Bahadur Shah Zafar'

const myInitials = inputName.split(' ').map(word => word[0]).join("")
console.log(myInitials)

const logWithName = msg => `gourav say ${msg}`
const logWithId = msg => `Id : 343434  ${msg}`
const logWithIdAndName = msg => logWithId(logWithName(msg))

console.log(logWithIdAndName("we are rocksttraining"))

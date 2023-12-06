const printMessage = (message) => {
    console.log(message)
}
const delayMessage = (message, delay, printMessage) => {
    setTimeout(() => printMessage(message), delay)
}
delayMessage("message will display with delay of 4 second ", 4000, printMessage)
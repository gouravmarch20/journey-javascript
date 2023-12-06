const msg1 = "gosetgo"
const msg2 = "hit man"

async function fakeFetch(msg, shouldReject) {

    if (shouldReject) {
        for (let index = 0; index < 1000000000; index++) {
        }

    }
    return msg
}

const syncCallsToServer = async (msg1, msg2) => {
    try {
        const messageOne = await fakeFetch(msg1, false)
        console.log(messageOne)
        const messageTwo = await fakeFetch(msg2, false)
        console.log(messageTwo)

    } catch { err => console.log(err) }
}





syncCallsToServer(msg1, msg2)
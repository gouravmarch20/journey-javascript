//async await && try catch combo best way ==> to use async task
fakeFetch = (msg, httpResponse) => httpResponse ? msg : "error no server response"
const getData = async () => {
    try {
        const data = await fakeFetch(`top line has option to kill time`, true)
        console.log(data)
    } catch {
        (err) => console.log(err)
    }
}
// way 1 : 
getData()


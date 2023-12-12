
function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`error from server : ${msg}`);
            }
            resolve(`from server : ${msg}`);
        }, 2000)
    })
}
// way 1 : 
fakeFetch(` kill time`, true).then(data => console.log(data)).catch(error => console.log("error -->" + error))

const sucessHandler = data => console.log(data)
const errorHandler = error => console.log(error)
// way 2 : 
fakeFetch(` but for bottom line it not`, false).then(sucessHandler).catch(errorHandler)
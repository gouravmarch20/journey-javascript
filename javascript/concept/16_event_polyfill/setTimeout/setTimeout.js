function createSetTimeout() {
    var timerId = 0
    var timerMap = {}


    function setTimeoutPolyfill(callback, delay) {
        var id = timerId++
        timerMap[id] = true
        var start = Date.now()
        function triggerCallback() {
            if (!timerMap[id]) return
            if (Date.now() > start + delay) {
                callback()
            } else {
                requestIdleCallback(triggerCallback)
            }
        }
        requestIdleCallback(triggerCallback)
        return id
    }

    function clearTimeoutPoly(id) {
        delete timerMap[id]
    }
    return {setTimeoutPolyfill, clearTimeoutPoly}
}
var {setTimeoutPolyfill, clearTimeoutPoly} = createSetTimeout()

console.log("start")
var myId = setTimeoutPolyfill(function() {
    console.log("Welcome to jscafe")
}, 10)
clearTimeoutPoly(myId)


console.log("end")
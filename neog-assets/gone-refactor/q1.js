//  promise part 1 code till resolve / reject run in sync way
// promise handling -> run async way --> run like await till not hit resolve/reject & then return resust in promise
//promise handling code run before settime out -> due to microtask queue
console.log('a')

setTimeout(() => {
  console.log('settimeout')
}, 0)
Promise.resolve(() => console.log('promise')).then(res => res())
console.log('b')

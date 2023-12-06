// var function scope so by lexical scoping => update var 5 times --> out from E.C
//setTime is async function so it has gone to webApi --> cb queue --> come var value acess by closure & print 6 for 5 time
// ** clouse remeber ref so all time 5 print
function timerA () {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}
timerA()

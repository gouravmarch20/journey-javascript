// closure sai solve var case
function timerA () {
  for (var i = 0; i < 5; i++) {
    function closureCreate (num) {
      setTimeout(() => {
        console.log(num)
      }, num * 1000)
    }
    // every time function call new cope in function define --> EC MAI GO //** created new copy of  num each time & closure ref to it
    closureCreate(i)
  }
}
timerA()

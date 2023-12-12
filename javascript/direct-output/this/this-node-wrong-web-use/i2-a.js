function a () {
  this.site = 'Learnersbucket'

  function b () {
    console.log(this.site)
  }

  b()
}

var site = 'Wikipedia'
new a()

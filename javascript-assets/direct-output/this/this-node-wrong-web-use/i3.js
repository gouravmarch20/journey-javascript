function a () {
  this.site = 'Learnersbucket'

  function b () {
    console.log(this.site)
  }

  b()
}

let site = 'Wikipedia' //let defines blocked scope variables and they are not added to global object.


new a()

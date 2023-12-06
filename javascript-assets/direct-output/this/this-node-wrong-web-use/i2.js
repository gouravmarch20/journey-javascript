function a () {
  console.log(this.site)// in new keyword this point to current EC created object
  this.site = 'Learnersbucket'
}

var site = 'Wikipedia'
new a()

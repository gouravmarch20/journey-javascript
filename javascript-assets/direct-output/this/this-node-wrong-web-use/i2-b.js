function a () {
  console.log(this.site)
  this.site = 'Learnersbucket'
}
var site = 'Wikipedia'

a()

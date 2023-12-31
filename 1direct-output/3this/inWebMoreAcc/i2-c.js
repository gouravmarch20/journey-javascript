let site = 'Wikipedia'

const a = () => {
  console.log(this.site)
  this.site = 'Learnersbucket'
}

a()

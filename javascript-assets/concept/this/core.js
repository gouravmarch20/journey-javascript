let a = {
  name: 'go',
  say () {
    console.log(this)
  }
}
let b = {
  name: 'git',
  say () {
    return function () {
      console.log(this)
    }
  }
}
// ? remove side-effects
let c = {
  name: 'git',
  say () {
    return () => {
      console.log(this)
    }
  }
}
// a.say()
b.say()() 

c.say()()

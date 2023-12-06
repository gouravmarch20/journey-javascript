;(function () {
  var objA = Object.create({
    foo: 'foo'
  })
  var objB = Object.create(objA)
  console.log(objA.toString() == objB.toString())
  console.log(objA.toString() === objB.toString())
})()

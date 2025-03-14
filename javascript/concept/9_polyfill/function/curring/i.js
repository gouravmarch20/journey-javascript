// Create a curry function that accepts 5 arguments
const ARGS_LEN = 5
const sum = (...args) => {
  if (args.length === ARGS_LEN) {
    console.log("args")

    return args.reduce(
      (initialValue, currentValue) => initialValue + currentValue,
      0
    )
  } else {
    const recursiveFn = (...args2) => {
      console.log(args2)

      args = args.concat(args2)
      if (args.length === ARGS_LEN)
        return args.reduce(
          (initialValue, currentValue) => initialValue + currentValue,
          0
        )
      else return recursiveFn
    }
    return recursiveFn
  }
}

// console.log(sum(1, 2, 3, 4)(5))
// console.log(sum(1)(2)(3)(4)(5))
console.log(sum(1, 2, 3)(4, 5))
// console.log(sum(1, 2)(3, 4, 5))
// console.log(sum(1)(2, 3, 4, 5))

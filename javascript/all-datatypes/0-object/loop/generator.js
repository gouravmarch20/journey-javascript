const person = {
    name: "Lydia Hallie",
    age: 21,
    *[Symbol.iterator]() {
      yield* Object.values(this)
    },
  }
  
  // Example usage:
  for (const value of person) {
    console.log(value)
  }
  // Objects aren't iterable by default. We can add this manually by adding the iterator symbol [Symbol.iterator], which has to return a generator object, 
  //This generator function has to yield the Object.values of the person object if we want it to return the array
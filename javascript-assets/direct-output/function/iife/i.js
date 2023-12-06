(() => {
  let x = (y = 10);
  console.log(x);
})();
console.log(x); //! let block scope

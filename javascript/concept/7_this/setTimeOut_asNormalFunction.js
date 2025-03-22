const example = {
  blog: "learnersbucket",
  displayBlog: function () {
    // this refers to the window object when called in the global context
    console.log(this); // true in a non-strict mode
  },
};

// Calling setTimeout with the method //* normal function
setTimeout(example.displayBlog, 200); // undefined

//   ----
const f1 = example.displayBlog;
f1();//* normal function

const f2 = example.displayBlog;

f2.call(example);//*  explicit bind

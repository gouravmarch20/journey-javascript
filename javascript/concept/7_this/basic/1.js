const outer = {
  name: "Outer",
  inner: {
    name: "Inner",
    arrow: () => console.log(this.name),
    traditional: function () {
      console.log(this.name);
    },
  },
};

outer.inner.arrow();  
outer.inner.traditional(); 

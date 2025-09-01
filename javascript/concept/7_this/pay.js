const obj = {
  example: function () {
    console.log(this === obj); // ✅ true (called as `obj.example()`)
    //   * inherit from closest non arrow functions
    const inner1 = () => {
      console.log(this === obj); // ✅ true (inherits `this` from `example`)

      const inner2 = () => {
        console.log(this === obj); // ✅ true (inherits from `inner1`)
      };
      inner2();

      const inner3 = () => {
        console.log(this === obj); // ✅ true (inherits from `inner1`)
        const inner4 = () => {
          console.log(this === obj); // ✅ true (inherits from `inner3`)
        };
        inner4();
      };
      inner3();
    };
    inner1();
  },
};

obj.example();

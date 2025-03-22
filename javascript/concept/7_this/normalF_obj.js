const obj = {
  example: function () {
    console.log(this === obj); // ✅ true (because `this` refers to `obj`)

    function inner1() {
      console.log(this === globalThis); // ✅ true (loses `this`, defaults to `globalThis`)

      function inner2() {
        console.log(this === globalThis); // ✅ true
      }
      inner2();

      function inner3() {
        console.log(this === globalThis); // ✅ true
        function inner4() {
          console.log(this === globalThis); // ✅ true
        }
        inner4();
      }
      inner3();
    }
    inner1();
  },
};

obj.example();

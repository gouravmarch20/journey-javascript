const obj = {
  name: "Alice",
  show: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj.show();
// 👉 "Alice"

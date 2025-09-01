const obj = {
  name: "Alice",
  say() {
    console.log(this.name);
  },
};

const fn = obj.say;
fn(); // 👉 undefined (or global.name if defined)

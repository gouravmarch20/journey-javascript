const arrow = () => console.log(this.name);
const obj = { name: "Alice" };

arrow.call(obj); // 👉 undefined
arrow.apply(obj); // 👉 undefined
arrow.bind(obj)(); // 👉 undefined
// 💡 call, apply, bind do nothing for arrow functions, because this is already lexically fixed.

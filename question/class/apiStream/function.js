function Steam() {
  const subscription = [];

    function subscribe(cb) {
      if (typeof cb === "function") {
        subscription.push(cb);
      }
    }
//   this.subscribe = function (cb) {
//     if (typeof cb === "function") {
//       subscription.push(cb);
//     }
//   };
  this.push = function push(value) {
    subscription.forEach((callback) => callback(value));
  };
}
const api = new Steam();
api.subscribe((na) => console.log("the s1", na));
api.subscribe((na) => console.log("the s2", na * 2));
api.push(5);

const promise1 = new Promise((res, rej) => {
  setTimeout(rej, 100, "hello");
});

const promise2 = new Promise((res, rej) => {
  setTimeout(res, 500, "flash");
});

Promise.race([promise1, promise2]).then((r) => console.log(r));

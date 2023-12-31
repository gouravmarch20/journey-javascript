const myPromise = Promise.resolve(Promise.resolve('Promise'));

function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0);//6
  myPromise.then(res => res).then(res => console.log(`${res} 1!`));//5
  console.log('Last line 1!');//1
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`)//3
  setTimeout(() => console.log('Timeout 2!'), 0);//7
  console.log('Last line 2!');//3
}


funcOne();
funcTwo();
console.log('three');//2
(() => {
    let x = (y = 10);
  })();
  
  console.log(typeof x);
  console.log(typeof y);//y = 10;let x = y;//^ y as global
  
//   console.log( x);//? 
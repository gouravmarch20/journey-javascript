(() => {
    let x = (y = 10);
    //^ is shorthand for: y = 10;  let x = y;


  })();
  
  console.log(typeof x);//? ReferenceError   type is undefined
//   console.log( x);
//   console.log(typeof y);
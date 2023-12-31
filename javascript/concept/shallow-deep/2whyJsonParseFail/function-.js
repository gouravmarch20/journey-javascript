const obj = {
    s : undefined,
    s1 : console.log,
    a : 5,
    b : Infinity,
    c : NaN
  }
  const obj1 = JSON.parse(JSON.stringify(obj))
  //^ function or undefined then not copy , 

  
  console.log( obj) 
  console.log( obj1) 
  
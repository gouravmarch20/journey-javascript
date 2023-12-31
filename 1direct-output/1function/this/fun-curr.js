const add = x => y => z => {
    console.log(x, y, z);
    return x + y + z;
  };
  
 console.log( add(4)(5)(6));
 console.log( add(4));
//  console.log( add(4)(5)(6)());
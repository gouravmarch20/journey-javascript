const vehicle = {
    type: "car",
    wheels: 4
  };
  
  const myCar = Object.create(vehicle);
  myCar.brand = "Toyota";
  
  console.log(myCar.type); // car (inherited)
  console.log(myCar.brand); // Toyota (own property)
  
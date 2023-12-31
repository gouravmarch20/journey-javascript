const p = new Promise((res, rej) => res(4))
p.then((v) => {
  console.log(v)
  return v * 2
}) .catch((e) => {
    console.log(e)
  })
  .finally((v) => {
    //* finally just run , nothing return 
    console.log("ShipPuDen" , v)
    return "Departure to the Front Lines"
  })
  .then((v) => {
    console.log(v)
    return v * 2
  })

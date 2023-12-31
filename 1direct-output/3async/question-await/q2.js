// cb to promise .then way
chooseToppings(function (topping) {
   placeOrder(
     toppings,
     function (order) {
       collectOrder(
         order,
         function (pizza) {
           eatPizza(pizza)
         },
         failureCallback
       )
     },
     failureCallback
   )
 }, failureCallback)
 // arrow
 chooseToppings()
   .then(toppings => placeOrder(toppings))
   .then(order => collectOrder(order))
   .then(pizza => eatPizza(pizza))
   .catch(failureCallback)
 
 //   tradition
 chooseToppings()
   .then(function (toppings) {
     return placeOrder(toppings)
   })
   .then(function (order) {
     return collectOrder(order)
   })
   .then(function (pizza) {
     return eatPizza(pizza)
   })
   .catch(failureCallback)
 // async - await
 const start = async () => {
   try {
     const toppings = await chooseToppings()
     const order = await placeOrder(toppings)
     const pizza = await collectOrder(order)
     await eatPizza(pizza)
   } catch (error) {
     failureCallback(error)
   }
 }
 start().then(()=>{})
 
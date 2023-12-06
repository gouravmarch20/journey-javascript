const obj = {
   name: 'gourav',
   role: 'sd',
   address: {
     city: 'delhi'
   }
 }
 Object.seal(obj)
 // add 
 obj.address.district = 'dd'
 console.log(obj.address.district)
 // update
 obj.address.city = 'france'
 console.log(obj.address.city)
 //delete
 delete obj.address.city
 console.log(obj.address.city)
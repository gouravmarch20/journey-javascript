const person = {
    fullName: function (city, country) {
      console.log(firstName + " " + lastName + "," + city + "," + country);
    }
  };
  
  const person1 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  person.fullName.call(person1, "Oslo", "Norway");
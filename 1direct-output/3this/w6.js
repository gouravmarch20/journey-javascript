const person = {
    firstName: "neoG",
    lastName: "Camp",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  
  let display = person.display.bind(person);
  setTimeout(display, 3000);
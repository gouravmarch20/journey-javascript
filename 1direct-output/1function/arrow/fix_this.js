const person = {
    name: "Alice",
    
    // Using an arrow function (works as expected)
    greetArrow: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`);  // 'this' refers to person
        }, 1000);
    },
    
    // Using a regular function (does NOT work unless fixed)
    greetRegular: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}`);  // 'this' is undefined or global object
        }, 1000);
    },

    // Fix using .bind(this)
    greetBind: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}`);  
        }.bind(this), 1000);  // Bind ensures 'this' refers to 'person'
    },

    // Fix using self = this
    greetSelf: function() {
        const self = this;  // Capture 'this' in a variable
        setTimeout(function() {
            console.log(`Hello, ${self.name}`);  // 'self' refers to 'person'
        }, 1000);
    }
};

person.greetArrow();   // Output: Hello, Alice
person.greetRegular(); // Output: Hello, undefined (or Hello, [global object name])
person.greetBind();    // Output: Hello, Alice
person.greetSelf();    // Output: Hello, Alice

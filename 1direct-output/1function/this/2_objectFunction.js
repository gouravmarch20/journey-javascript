const user = {
    name: 'John',
    greet: function() {
        console.log(this.name + ' says hello!');
    }
};

user.greet();  

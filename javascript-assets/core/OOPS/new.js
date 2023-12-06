// new : Constructor methord 


/* NEW keyword role
1. create object of given name , auto return created  object
2. change this point form window to current object 
3 .A>>>  Active Prototype ==> direct point to main object => have acess to predefined methord 

3.B >>> add coustom methord to by portro
*/
function Porton(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
// ! coustom methord on object
Porton.prototype.attack = function () {
    return 'attack with ' + this.weapon
}
const peter = new Porton('pete', "stones ")
console.log(peter.attack())

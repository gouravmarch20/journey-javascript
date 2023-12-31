class GrandParent {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return "attack with --> " + this.weapon
    }
}

class Parent extends GrandParent {
    constructor(name, weapon, type) {
        // super => grandparent constructor run
        super(name, weapon);
        this.type = type
    }
}
class Child extends GrandParent {
    constructor(name, weapon, color) {
        super(name, weapon);//! to get parent class data
        this.color = color
    }
    creatorFun(){
        return "minimize destroyed"
    }
}
const gourav = new Parent("Gourav" , "bharma" , 'destroyer');
console.log(gourav)
console.log(gourav.attack())


const child = new Child("Shi" , "tris" , 'green');
console.log(child)
console.log(child.creatorFun())
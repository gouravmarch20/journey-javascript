class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    // ? outside constructor run only once
    attack() {
        return "attack with --> "+this.weapon
    }
}

const peter = new Elf('peter','stone3')
console.log(peter.attack())
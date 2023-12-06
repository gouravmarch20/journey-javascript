// inheritance & private value
class Electronics {
  #input
  #output
  name
  constructor (input, output, name) {
    this.#input = input
    this.#output = output
    this.name = name
  }
  print () {
    console.log(this.name)
  }
}
class Charger extends Electronics {
  #plugType
  constructor (input, output, name, plugType) {
    super(input, output, name) //call inside  constructor ,super is constructor of  parent class , parent invoked as first those argument to it

    this.#plugType = plugType
  }
}
class HardDisk extends Electronics {
  #rpm
  constructor (input, output, name, rpm) {
    super(input, output, name)

    this.#rpm = rpm
  }
  get hardDiskSpeed () {
    console.log(this.#rpm)
  }
}

const hpCharger = new Charger(20, 43, 'nexon', 'avana')
const newElectric = new Electronics(18, 200, 'ola')
const harddisk = new HardDisk(18, 200, 'mothersuni', 9009)
hpCharger.print()
console.log(harddisk)
harddisk.hardDiskSpeed

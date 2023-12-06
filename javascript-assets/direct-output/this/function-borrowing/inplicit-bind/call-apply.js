// call vs apply => no such difference 
/*
-apply  : pass arguments as array of items => so recive as array
- call : 


*/
let sandwich = {
  layer1: 'cheese',
  layer2: 'lettuec',
  layer3: 'tomato',
  sandwichIngredients: function (side) {
    console.log(this.layer1, this.layer2, this.layer3, 'with', side)
  }
}

sandwich.sandwichIngredients('chips')
mySandwich = {
  layer1: 'sdfa',
  layer2: 'lettsdfauec',
  layer3: 'tomadadsdfasdfato'
}
sandwich.sandwichIngredients.call(mySandwich , "appp")// ! pass argument
sandwich.sandwichIngredients.apply(mySandwich, ['fries', 'drink']) 

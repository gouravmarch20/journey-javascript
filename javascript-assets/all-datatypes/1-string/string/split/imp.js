//! >> remove space from string --->  if empty space during split ==> it wrap in item as no space
const str = "  space case     in    split     "
console.log(str.split());
console.log(str.split(" "));// find space there only split & replace space with nospace / nothing
console.log(str.split(""));//where is no space --> each item has no space ==> so all break 
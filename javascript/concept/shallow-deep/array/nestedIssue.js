// one level only spread operator work
let arrOne = [3, 5, 9, [4, 5] , [53 , 66]]
let arrTwo = [...arrOne]
arrTwo[0] = "alpha"//? no change
arrTwo[3][1] = 'avanti feed'
arrTwo[3][0] = "990"
arrTwo[4][0]= "avenger"


console.log(arrOne)


let arrOne = [3, 5, 9, [4, 5] , [53 , 66]]
const arrTwo = JSON.parse(JSON.stringify(arrOne))
arrTwo[0] = "alpha"
arrTwo[3][1] = 'avanti feed'
arrTwo[3][0] = "990"
arrTwo[4][0]= "avenger"
arrTwo[2][0] = 'two step'
console.log(arrOne)

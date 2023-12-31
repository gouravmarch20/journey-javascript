const obj = {
  data: {
    data: {
      data: {
        data: null,
        value: 5
      }
    },
    value: 10
  },
  value: 5
}
let totalSum = 0

const sumR = obj => {
  console.log('00')
  if (!obj.data) {
    return 0
  }
  
  totalSum = obj.value + sumR(obj.data)
  console.log(totalSum)
}
sumR(obj)

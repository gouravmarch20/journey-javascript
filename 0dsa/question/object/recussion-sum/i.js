const obj = {
  data: {
    data: {
      data: null
    },
    value: 10
  },
  value: 5
}

const test = ({ data, value }) => {
  if (!data) {
    return 0
  } else {
    return value + test(data)
  }
}

console.log(test(obj))

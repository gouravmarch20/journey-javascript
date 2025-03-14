const str = "the th-fox then is red the  iron is the blue they sky"

// console.log(str.split("the"))

const mySplit = (string, delimiter) => {
  const res = []
  if (delimiter === "") return Array.from(string)
  const startSplit = (str, i) => {
    if (i >= str.length) return
    const index = str.indexOf(delimiter)
    if (index >= 0) {
      res.push(str.substring(0, index))

      startSplit(
        str.substring(index + delimiter.length),
        index + delimiter.length
      )
    } else {
      res.push(str)
    }
  }
  startSplit(string, 0)
  return res
}

console.log(mySplit(str, "t"))

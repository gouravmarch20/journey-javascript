function numIdenticalPairs(nums) {
    let goodPair = 0
    let map = {}
    for (let num of nums) {
      if (map[num]) {
        goodPair++;
        // console.log(map[num])
        // goodPair += map[num]
        // map[num]++
      } else {
        map[num] = 1
      }
    }
    //   console.log(map)
    return goodPair
  }
  console.log(numIdenticalPairs([1, 1, 3, 1, 1, 3]))
  
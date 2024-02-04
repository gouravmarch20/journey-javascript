// l1 : split work on   value  
// l2 : substring : methord  --> slice also work same
const protectEmail = userEmail => {
  var splitted, part1, part2
  splitted = userEmail.split('@')
  console.log(splitted);
  part1 = splitted[0]
  part1 = part1.substring(0, part1.length - part1.length / 2)
  part2 = splitted[1]
  return part1 + '...@' + part2
}

console.log(protectEmail('akanksha@neog.camp'))

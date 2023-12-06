// l1 : avoid return negative sign --> -1* num sai return
// TODO: NEGATIVE SIGN NO RETURN
const calculateProfitLoss = (cp, sp) => {
  const net = cp - sp
  if (cp > sp) {
    return net
  } else {
    return (-1 * net )
  }
}
console.log(calculateProfitLoss(20, 2000))

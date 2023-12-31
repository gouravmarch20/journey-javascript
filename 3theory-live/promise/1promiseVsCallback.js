

const createOrder =(cartItem) => {
    const p = new Promise((res , rej) => res(cartItem))
    return p * 34
} 
createOrder(12, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    console.log();
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance(paymentInfo)
    })
  })
})
createOrder(12)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo))

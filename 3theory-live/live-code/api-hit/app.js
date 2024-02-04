// when ever we hit api -> 2 promise need to resolve -> one by fetch  :  to resolve api --> second we resolve for  json --> return res.json()
//? what is promise chaning =>when we resolve on promise result in second promise  ==>here there must be more than one promise ==> 

// res.json()--> when we get data from server it send us response object -> which contain many irrelavant information ==> to get only body & javascript object , it also convert from JSON to js object --> .catch handle all case of error
// why 2 nd promise -> fetch / 1st promise  no return throw an error even the server has return 400 or 500 status code
const data = fetch('https://dummy.restapiexample.com/api/v1/employees')
console.log(data) // return [PromiseState]]: "fulfilled even error occur in api
// *** when ever we resolve api  --> it give data but it has one more  promise
// note name can not be same -> .then first & .then second

data
  .then(data => {
    return data.json()
  })
  .then(result => console.log(result))

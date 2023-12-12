const promise = () => new Promise((_, reject) => reject())
const promiseOne = promise()

promiseOne
  .then(() => console.log('sucess one'))
  .then(() => console.log('sucess two'))
  .catch(() => console.log('failure  '))
  .then(() => console.log('will i run  '))
  .then(() => console.log('---- epe  '))

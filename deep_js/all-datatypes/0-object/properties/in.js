// if key avalible or inherit by prototype chain --> return true
const obj = {
  name: 'gitman',
  classwa: 5
}
console.log('name' in obj);
console.log('fsda' in obj);
console.log('valueOf' in obj);//**  form proto inherit 

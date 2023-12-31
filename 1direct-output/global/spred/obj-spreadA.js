const person = {
    name: 'Lydia',
    age: 21,
  };
  
  const changeAge = (x = { ...person }) => (x.age += 1);
  const changeAgeAndName = (x = { ...person }) => {
    x.age += 3;
    x.name = 'Sarah';
  };
  
  changeAge(person);
  changeAgeAndName();//no arg pass so default argument
  
  console.log(person);
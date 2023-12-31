const settings = {
    username: 'aot',
    level: 19,
    health: 90,
  };
  
  const data = JSON.stringify(settings);//? all ko
  const data1 = JSON.stringify(settings ,  ['level', 'health']);//? only mentioned one
  console.log(data);
  console.log(data1);
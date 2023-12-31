const bird = {
    size: 'small',
  };
  const data = 'size'
  const mouse = {
    name: 'Mickey',
    small: true,
  };
  console.log(mouse[bird["size"]]);
  console.log(mouse[bird.size]);


  console.log(bird[data]);
console.log(bird.data);
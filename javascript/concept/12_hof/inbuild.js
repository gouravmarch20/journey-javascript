const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Book', price: 20, category: 'Books' },
    { name: 'Phone', price: 800, category: 'Electronics' },
    { name: 'Shirt', price: 30, category: 'Clothing' },
  ];
  
  const electronics = products.filter(product => product.category === 'Electronics');
  console.log(electronics); // Output: Laptops and Phones
  
  const prices = products.map(product => product.price);
  console.log(prices); // [1200, 20, 800, 30]
  
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  console.log(totalPrice); // 2050
  
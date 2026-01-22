const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

// 1. map() - get all product names
const productNames = products.map(p => p.name);

// 2. filter() - products cheaper than 600
const cheapProducts = products.filter(p => p.price < 600);

// 3. find() - find product exactly 500
const exactPrice = products.find(p => p.price === 500);

// 4. forEach() - print each product
products.forEach(p => console.log(`${p.name} costs ${p.price}`));

// 5. reduce() - total price of all products
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

console.log({ productNames, cheapProducts, exactPrice, totalPrice });

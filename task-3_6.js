const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  const value = Object.values(allProdcuts);
  for (let i = 0; i < allProdcuts.length; i += 1) {
    let obj = allProdcuts[i];
    if (obj.name === productName) {
      totalPrice += obj.price * obj.quantity;
    }
  }
  return totalPrice;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

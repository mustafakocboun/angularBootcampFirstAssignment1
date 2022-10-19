// alert("Hello");
// console.log("Helo");
let cart = [
  { id: 1, productName: "product 1", quantity: 3, unitPrice: 3000 },
  { id: 2, productName: "product 2", quantity: 2, unitPrice: 1000 },
  { id: 3, productName: "product 3", quantity: 1, unitPrice: 500 },
];
// Sepetteki tüm ürünleri gez, adet*unitPrice ile toplam fiyatı bul
// Kullanıcıya göster {totalPrice:300,totalProductCount:6}

let total = { totalPrice: 0, totalProductCountt: 0 };
cart.forEach((cart) => {
  total.totalPrice += cart.unitPrice * cart.quantity;
  total.totalProductCountt += cart.quantity;
});
console.log(total);

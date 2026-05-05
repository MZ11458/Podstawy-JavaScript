// Przygotowano prosty koszyk sklepu; rozszerzenie wlasne to koszt dostawy i prog darmowej dostawy, a najwieksza trudnosc sprawilo policzenie kwoty po rabacie w czytelny sposob.
const cart = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 },
];

const discountThreshold = 30;
const discountPercent = 10;
const deliveryPrice = 8;
const freeDeliveryThreshold = 50;

const cartItems = cart.map((item) => ({
  ...item,
  total: item.price * item.quantity,
  description: `${item.quantity} x ${item.name}`,
}));

const totalBeforeDiscount = cartItems.reduce((sum, item) => sum + item.total, 0);
const discountValue =
  totalBeforeDiscount > discountThreshold ? totalBeforeDiscount * (discountPercent / 100) : 0;
const totalAfterDiscount = totalBeforeDiscount - discountValue;
const finalDeliveryPrice = totalAfterDiscount >= freeDeliveryThreshold ? 0 : deliveryPrice;
const finalTotal = totalAfterDiscount + finalDeliveryPrice;

console.log("Raport koszyka sklepu");
console.log(`Pozycje: ${cartItems.map((item) => item.description).join(", ")}`);
console.log(`Suma przed rabatem: ${totalBeforeDiscount.toFixed(2)} zl`);
console.log(`Rabat: ${discountValue.toFixed(2)} zl`);
console.log(`Suma po rabacie: ${totalAfterDiscount.toFixed(2)} zl`);
console.log(`Dostawa: ${finalDeliveryPrice.toFixed(2)} zl`);
console.log(`Do zaplaty: ${finalTotal.toFixed(2)} zl`);

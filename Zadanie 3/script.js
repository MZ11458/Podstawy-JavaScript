// Przygotowano liste zakupow z priorytetami; rozszerzenie wlasne to kategoria produktu i filtr produktow spozywczych, a najwieksza trudnosc sprawilo polaczenie filter() oraz map() w czytelny raport.
const shoppingProducts = [
  { name: "chleb", quantity: 2, urgent: true, category: "spozywcze" },
  { name: "mleko", quantity: 1, urgent: false, category: "spozywcze" },
  { name: "jajka", quantity: 10, urgent: true, category: "spozywcze" },
  { name: "makaron", quantity: 3, urgent: false, category: "spozywcze" },
  { name: "mydlo", quantity: 1, urgent: true, category: "chemia" },
];

const allProductsText = shoppingProducts
  .map((product) => `${product.name} - ${product.quantity} szt.`)
  .join(", ");

const urgentProducts = shoppingProducts.filter((product) => product.urgent);
const urgentNamesUpperCase = urgentProducts.map((product) => product.name.toUpperCase());
const foodProducts = shoppingProducts.filter((product) => product.category === "spozywcze");

console.log(`Lista zakupow: ${allProductsText}`);
console.log(`Liczba pilnych produktow: ${urgentProducts.length}`);
console.log(`Pilne produkty: ${urgentNamesUpperCase.join(", ")}`);
console.log(`Produkty spozywcze na liscie: ${foodProducts.length}`);

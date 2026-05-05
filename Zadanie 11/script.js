// Przygotowano podzial kosztow wyjazdu; rozszerzenie wlasne to rozliczenie kwoty do oddania lub otrzymania, a najwieksza trudnosc sprawilo zbudowanie obiektu z wydatkami kazdej osoby.
const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" },
];

const totalCost = tripCosts.reduce((sum, cost) => sum + cost.amount, 0);
const costsPerPerson = tripCosts.reduce((summary, cost) => {
  return {
    ...summary,
    [cost.paidBy]: (summary[cost.paidBy] || 0) + cost.amount,
  };
}, {});

const people = Object.keys(costsPerPerson);
const equalShare = totalCost / people.length;
const biggestPayer = people.reduce((currentBiggest, person) =>
  costsPerPerson[person] > costsPerPerson[currentBiggest] ? person : currentBiggest
);
const settlement = people.map((person) => {
  const difference = costsPerPerson[person] - equalShare;
  const action = difference >= 0 ? "powinien otrzymac" : "powinien oddac";

  return `${person}: ${action} ${Math.abs(difference).toFixed(2)} zl`;
});

console.log("Raport kosztow wyjazdu");
console.log(`Calkowity koszt: ${totalCost.toFixed(2)} zl`);
console.log("Wydatki per osoba:");
console.log(costsPerPerson);
console.log(`Najwiecej zaplacila osoba: ${biggestPayer}`);
console.log(`Rowny udzial na osobe: ${equalShare.toFixed(2)} zl`);
console.log(`Rozliczenie: ${settlement.join("; ")}`);

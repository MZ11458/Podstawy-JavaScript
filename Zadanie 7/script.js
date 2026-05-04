// Przygotowano rejestr napraw w serwisie; rozszerzenie wlasne to priorytet zgloszenia, a najwieksza trudnosc sprawilo zaktualizowanie rekordu bez zmiany oryginalnej tablicy.
const repairs = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe", priority: "wysoki" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie", priority: "sredni" },
  { id: 3, client: "Ola", device: "tablet", status: "zakonczone", priority: "niski" },
  { id: 4, client: "Marek", device: "monitor", status: "w trakcie", priority: "sredni" },
];

const searchedId = 1;
const newStatus = "w trakcie";
const selectedStatus = "w trakcie";

const foundRepair = repairs.find((repair) => repair.id === searchedId);
const updatedRepairs = repairs.map((repair) =>
  repair.id === searchedId ? { ...repair, status: newStatus } : repair
);
const selectedStatusCount = updatedRepairs.filter((repair) => repair.status === selectedStatus).length;

console.log("Oryginalny rejestr napraw:");
console.log(repairs);
console.log(`Znalezione zgloszenie: ${foundRepair.client}, ${foundRepair.device}, status: ${foundRepair.status}.`);
console.log("Zaktualizowany rejestr napraw:");
console.log(updatedRepairs);
console.log(`Liczba zgloszen ze statusem "${selectedStatus}": ${selectedStatusCount}`);

// Przygotowano decyzje, co zabrac na uczelnie; rozszerzenie wlasne to sprawdzenie legitymacji, a najwieksza trudnosc sprawilo polaczenie kilku warunkow w czytelne komunikaty.
const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const hasStudentId = true;
const dayType = "laboratorium";

let preparationMessage = "";

if (hasLaptop && hasNotebook && hasStudentId) {
  preparationMessage = "Student ma podstawowe rzeczy na zajecia.";
} else {
  preparationMessage = "Student powinien sprawdzic plecak przed wyjsciem.";
}

const shortStatus = hasLaptop && hasNotebook ? "gotowy" : "niegotowy";
const chargerWarning = hasLaptop && !hasCharger ? "Brakuje ladowarki do laptopa." : "Ladowarka nie jest problemem.";
const dayMessage =
  dayType === "laboratorium"
    ? "Na laboratorium warto zabrac laptop i notatnik."
    : "Na wyklad najwazniejszy bedzie notatnik.";

console.log(preparationMessage);
console.log(`Krotki status: ${shortStatus}.`);
console.log(chargerWarning);
console.log(dayMessage);
console.log(`Legitymacja studencka: ${hasStudentId ? "spakowana" : "brakuje"}.`);

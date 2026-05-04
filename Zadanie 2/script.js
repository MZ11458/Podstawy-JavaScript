// Obliczono statystyki tygodniowego budzetu; rozszerzenie wlasne to limit dzienny i komunikat o mieszczeniu sie w planie, a najwieksza trudnosc sprawilo czytelne sformatowanie raportu.
const weeklyExpenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];
const dailyLimit = 35;

const totalExpenses = weeklyExpenses.reduce((sum, expense) => sum + expense, 0);
const averageExpense = totalExpenses / weeklyExpenses.length;
const biggestExpense = Math.max(...weeklyExpenses);
const budgetStatus = averageExpense <= dailyLimit ? "miesci sie w limicie" : "przekracza limit";

console.log("Raport budzetu tygodniowego");
console.log(`Liczba wydatkow: ${weeklyExpenses.length}`);
console.log(`Suma wydatkow: ${totalExpenses.toFixed(2)} zl`);
console.log(`Sredni wydatek: ${averageExpense.toFixed(2)} zl`);
console.log(`Najwiekszy wydatek: ${biggestExpense.toFixed(2)} zl`);
console.log(`Sredni wydatek ${budgetStatus} ${dailyLimit} zl dziennie.`);

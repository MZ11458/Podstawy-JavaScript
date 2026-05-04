// Utworzono generator planu dnia; rozszerzenie wlasne to numerowanie zadan i liczba zadan, a najwieksza trudnosc sprawilo zwrocenie czytelnego tekstu z funkcji.
const studentTasks = ["zajecia", "zakupy", "trening"];
const freeDayTasks = ["odpoczynek", "spacer"];

function createDayPlan(name, tasks = ["nauka JavaScript", "odpoczynek"]) {
  const numberedTasks = tasks
    .map((task, index) => `${index + 1}. ${task}`)
    .join(", ");

  return `${name} ma dzisiaj ${tasks.length} zadania: ${numberedTasks}.`;
}

console.log(createDayPlan("Jan", studentTasks));
console.log(createDayPlan("Anna", freeDayTasks));
console.log(createDayPlan("Ola"));

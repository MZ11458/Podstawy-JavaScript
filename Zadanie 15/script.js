// Przygotowano prosty planer zajec; rozszerzenie wlasne to filtrowanie po trybie online lub stacjonarnym, a najwieksza trudnosc sprawilo czytelne opisanie zajec z roznych dni tygodnia.
const schedule = [
  { day: "poniedzialek", subject: "Programowanie", room: "A12", online: false },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false },
  { day: "piatek", subject: "UX", room: "online", online: true },
];

function getClassesByDay(classSchedule, selectedDay) {
  return classSchedule.filter((lesson) => lesson.day === selectedDay);
}

function getClassesByMode(classSchedule, onlineMode) {
  return classSchedule.filter((lesson) => lesson.online === onlineMode);
}

function formatClasses(classList) {
  return classList.map((lesson) => {
    const mode = lesson.online ? "online" : "stacjonarne";

    return `${lesson.subject} - sala/tryb: ${lesson.room}, zajecia ${mode}`;
  });
}

const selectedDay = "wtorek";
const selectedDayClasses = getClassesByDay(schedule, selectedDay);
const onlineClasses = getClassesByMode(schedule, true);
const stationaryClasses = getClassesByMode(schedule, false);

console.log(`Zajecia w dniu: ${selectedDay}`);
console.log(formatClasses(selectedDayClasses));
console.log(`Liczba wszystkich zajec w tygodniu: ${schedule.length}`);
console.log(`Liczba zajec online: ${onlineClasses.length}`);
console.log(`Liczba zajec stacjonarnych: ${stationaryClasses.length}`);
console.log(`Zajecia online: ${formatClasses(onlineClasses).join("; ")}`);

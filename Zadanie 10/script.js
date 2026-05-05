// Przygotowano dziennik aktywnosci sportowej; rozszerzenie wlasne to wskazanie najbardziej kalorycznego treningu, a najwieksza trudnosc sprawilo zbudowanie kompletnego raportu z kilku obliczen.
const activities = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "silownia", minutes: 60, calories: 450 },
];

const totalMinutes = activities.reduce((sum, activity) => sum + activity.minutes, 0);
const totalCalories = activities.reduce((sum, activity) => sum + activity.calories, 0);
const longActivities = activities.filter((activity) => activity.minutes > 30);
const mostCaloricActivity = activities.reduce((bestActivity, activity) =>
  activity.calories > bestActivity.calories ? activity : bestActivity
);

console.log("Raport aktywnosci sportowej");
console.log(`Laczny czas treningow: ${totalMinutes} minut`);
console.log(`Liczba spalonych kalorii: ${totalCalories} kcal`);
console.log(`Aktywnosci dluzsze niz 30 minut: ${longActivities.map((activity) => activity.type).join(", ")}`);
console.log(`Najbardziej kaloryczny trening: ${mostCaloricActivity.type}, ${mostCaloricActivity.calories} kcal`);

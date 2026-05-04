// Przygotowano katalog filmow do obejrzenia; rozszerzenie wlasne to priorytet filmu, a najwieksza trudnosc sprawilo dobranie kilku filtrow bez zmieniania danych wejsciowych.
const movies = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true, priority: "sredni" },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false, priority: "wysoki" },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false, priority: "wysoki" },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true, priority: "niski" },
  { title: "The Batman", category: "action", rating: 7.8, watched: false, priority: "sredni" },
];

const unwatchedMovies = movies.filter((movie) => !movie.watched);
const highlyRatedMovies = movies.filter((movie) => movie.rating > 8.0);
const highPriorityMovies = unwatchedMovies.filter((movie) => movie.priority === "wysoki");
const recommendedTitles = highPriorityMovies.map((movie) => movie.title);

console.log("Raport katalogu filmow");
console.log(`Liczba wszystkich filmow: ${movies.length}`);
console.log(`Filmy jeszcze nieobejrzane: ${unwatchedMovies.length}`);
console.log(`Filmy z ocena wyzsza niz 8.0: ${highlyRatedMovies.length}`);
console.log(`Polecane tytuly do obejrzenia: ${recommendedTitles.join(", ")}`);

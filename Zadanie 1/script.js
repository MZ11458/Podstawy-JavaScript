// Utworzono wizytowke uzytkownika; rozszerzenie wlasne to ulubiony jezyk programowania, a najwieksza trudnosc sprawilo ulozenie czytelnych komunikatow.
const profile = {
  firstName: "Jan",
  lastName: "Kowalski",
  city: "Katowice",
  age: 21,
  fieldOfStudy: "informatyka",
  favoriteLanguage: "JavaScript",
};

const fullName = `${profile.firstName} ${profile.lastName}`;
const adultMessage = profile.age >= 18 ? "jest pelnoletni" : "nie jest pelnoletni";

console.log(`Uzytkownik: ${fullName}`);
console.log(`${profile.firstName} mieszka w miescie ${profile.city} i studiuje kierunek: ${profile.fieldOfStudy}.`);
console.log(`${fullName} ma ${profile.age} lat i ${adultMessage}.`);
console.log(`Ulubiony jezyk programowania uzytkownika to ${profile.favoriteLanguage}.`);

// Przygotowano wyszukiwarke kontaktow; rozszerzenie wlasne to kategoria relacji oraz szukanie po fragmencie nazwy, a najwieksza trudnosc sprawilo napisanie uniwersalnego formatowania wynikow.
const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true, relation: "rodzina" },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false, relation: "praca" },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true, relation: "znajomi" },
  { name: "Marek Zielinski", phone: "503-600-800", city: "Gliwice", favorite: false, relation: "praca" },
];

function findContactsByCity(contactList, city) {
  return contactList.filter((contact) => contact.city === city);
}

function findFavoriteContacts(contactList) {
  return contactList.filter((contact) => contact.favorite);
}

function findContactsByNamePart(contactList, namePart) {
  const loweredNamePart = namePart.toLowerCase();

  return contactList.filter((contact) => contact.name.toLowerCase().includes(loweredNamePart));
}

function formatContacts(contactList) {
  return contactList.map((contact) => `${contact.name} - ${contact.phone} (${contact.city}, ${contact.relation})`);
}

console.log("Kontakty z Katowic:");
console.log(formatContacts(findContactsByCity(contacts, "Katowice")));
console.log("Kontakty ulubione:");
console.log(formatContacts(findFavoriteContacts(contacts)));
console.log("Kontakty znalezione po fragmencie nazwy 'mar':");
console.log(formatContacts(findContactsByNamePart(contacts, "mar")));

// Elimina el segundo elemento del array y muestra el array por consola.

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
newList = RickAndMortyCharacters.splice(1,1);
console.log("Hemos borrado de la lista: " + newList + " y la nueva lista es" + RickAndMortyCharacters);
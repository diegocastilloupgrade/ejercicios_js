//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myUl$$ = document.createElement('ul');
document.body.appendChild(myUl$$);
for (const iterator of countries) {
  const myLi$$ = document.createElement('li');
  myLi$$.innerText = iterator;
  myUl$$.appendChild(myLi$$);
}

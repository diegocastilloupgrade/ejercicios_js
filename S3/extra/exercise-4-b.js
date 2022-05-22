//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
];

for (let i = 0; i < countries.length; i++) {
  const myDiv$$ = document.createElement('div');
  const myHeaderFour$$ = document.createElement('h4');
  const myHeaderImg$$ = document.createElement('img');
  myHeaderFour$$.innerText = countries[i].title;
  myHeaderImg$$.src = countries[i].imgUrl;
  document.body.appendChild(myDiv$$);
  myDiv$$.appendChild(myHeaderFour$$);
  myDiv$$.appendChild(myHeaderImg$$);
  myDiv$$.classList.add('itemlist' + [i]);
}

const myButton$$ = document.querySelector('button');
const capaABorrar$$ = document.querySelector('.itemlist' + (countries.length-1));
console.log(countries.length);

const onClick = () => {
  capaABorrar$$.remove();
};
myButton$$.addEventListener('click', onClick);

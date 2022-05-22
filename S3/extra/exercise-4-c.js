//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
];

const borrarElemento = (elemento) => {
  elemento.remove();
};

for (let i = 0; i < countries.length; i++) {
  //Creo capa contenedora
  const myDiv$$ = document.createElement('div');
  myDiv$$.classList.add('itemlist' + [i]); //Añado la clase itemlist al div
  document.body.appendChild(myDiv$$); //Inserto den el documento
  //Creo h4
  const myHeaderFour$$ = document.createElement('h4');
  myHeaderFour$$.innerText = countries[i].title; //inserto en el h4 el contenido de la key title del array countries
  myDiv$$.appendChild(myHeaderFour$$); //Inserto en el documento

  //Creo img
  const myHeaderImg$$ = document.createElement('img');
  myHeaderImg$$.src = countries[i].imgUrl; //añado en el parametro scr la url de la imagen situada en el key imgUrl del array countries
  myDiv$$.appendChild(myHeaderImg$$); //Inserto en el documento

  //Creo el boton de borrar
  const deleteButton$$ = document.createElement('button');
  deleteButton$$.innerText = 'Borrame'; // le meto el texto Borrame al boton
  deleteButton$$.addEventListener('click', () => borrarElemento(myDiv$$)); //le añado un evento al boton. este evento es del tipo click y que ejecute la función borrarElemento al que le paso por parametro lo que quiero borrar que en este caso es myDiv$$
  myDiv$$.appendChild(deleteButton$$); //Inserto el botton
}

const myButton$$ = document.querySelector('button');
const capaABorrar$$ = document.querySelector(
  '.itemlist' + (countries.length - 1)
);
const onClick = () => {
    capaABorrar$$.remove();
  };
  myButton$$.addEventListener('click', onClick);
  
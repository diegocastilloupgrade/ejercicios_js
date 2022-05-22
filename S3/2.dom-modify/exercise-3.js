// Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const myCapa$$ = document.createElement('div');

document.body.appendChild(myCapa$$);

for (let i = 0; i < 6; i++) {
  const myParrafo$$ = document.createElement('p');
  myCapa$$.appendChild(myParrafo$$);
}

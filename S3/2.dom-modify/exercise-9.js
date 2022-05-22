//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.

const myCapash$$ = document.querySelectorAll('.fn-insert-here');
console.log(myCapash$$);
for (let i = 0; i < myCapash$$.length; i++) {
  const myParagraph$$ = document.createElement('p');
  myParagraph$$.innerText = 'Voy dentro!';
  myCapash$$[i].appendChild(myParagraph$$);
}

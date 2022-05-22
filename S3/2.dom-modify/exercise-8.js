// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const myDividers$$ = document.querySelectorAll("div");
const myParagraph$$ = document.createElement("p");
myParagraph$$.innerText = "Voy en medio!";
document.body.insertBefore(myParagraph$$, myDividers$$[1])

//myDividers$$.splice(1,1,myParagraph$$);
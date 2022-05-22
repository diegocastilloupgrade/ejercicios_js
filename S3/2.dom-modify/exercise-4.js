// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const myParrafo$$ = document.createElement("p");
myParrafo$$.innerText = "Soy Dinámico";

document.body.appendChild(myParrafo$$);
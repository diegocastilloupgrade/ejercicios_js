// Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

const myInput$$ = document.querySelector('input');


const myFocus = () => {
    console.log(myInput$$.value);
};

myInput$$.addEventListener("focus",myFocus);
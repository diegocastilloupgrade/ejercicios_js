// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.

const mybutton$$ = document.createElement('button');
mybutton$$.id = 'btnToClick';
mybutton$$.innerText = 'Púlsame';

document.body.appendChild(mybutton$$);


const onClick = () => {
    console.log('kk');
};

mybutton$$.addEventListener("click",onClick);
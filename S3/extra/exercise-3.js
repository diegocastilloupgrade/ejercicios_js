//Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const myOriginalDiv$$ = document.querySelector('[data-function="printHere"]');
const myUl$$ = document.createElement("ul");
myOriginalDiv$$.appendChild(myUl$$);
for (const iterator of cars) {
    const myLi$$ = document.createElement("li");
    myLi$$.innerHTML = iterator;
    myUl$$.appendChild(myLi$$);
}
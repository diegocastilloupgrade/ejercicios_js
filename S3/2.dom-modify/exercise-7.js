// Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const myRemove$$ = document.querySelectorAll(".fn-remove-me");
console.log(myRemove$$);
for (let i = 0; i < myRemove$$.length; i++) {
    document.body.removeChild(myRemove$$[i]);   
}
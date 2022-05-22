// Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const myList$$ = document.createElement('ul');

document.body.appendChild(myList$$);

for (let i = 0; i < apps.length; i++) {
  const myElement$$ = document.createElement('li');
  myElement$$.innerHTML = apps[i];
  myList$$.appendChild(myElement$$);
}

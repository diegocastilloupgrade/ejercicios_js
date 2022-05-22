// queremos dormirnos, tenemos insomnio, queremos un bucle que cuente hasta 10 ovejas, cada una será un cosole.log(1 oveja... 2 ovejas... etc.) y que
// cuando sea 10 salga un console.log("zzz") para indicar que nos hemos dormido

for (let i = 0; i < 11; i++) {
    if (i<10) {
        console.log(i + "oveja");
    } else {
        console.log ("zzz...")
    }

}

// tenemos este array -> const comidas = ["Cebolla", "Arroz", "Aceite", "Macarrones", "Aceitunas"];
// queremos mostrar por pantalla las palabras que contengan una e en su nombre;

const comidas = ["Cebolla", "Arroz", "Aceite", "Macarrones", "Aceitunas"];
for (let i = 0; i < comidas.length; i++) {

    if (comidas[i].includes("e")) {
        console.log(comidas[i])
    }
}


// queremos, sacar por pantalla el nombre de todos los alumnos que tengan más de 18 años y menos de 100
const alumnos = [
    {
        name: "Daniel", age: 14
    },
    {
        name: "Alejandro", age: 11
    },
    {
        name: "Jose Luis", age: 12
    },
    {
        name: "Antonio", age: 2341
    },
    {
        name: "Pedro", age: 40
    },
    {
        name: "Pepe", age: 12
    },
    {
        name: "Anuel prrr", age: 30
    }
];

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].age >= 18 && alumnos[i].age <100) {
        console.log(alumnos[i].name);
    } 

}

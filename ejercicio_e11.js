// Arreglo de números
let numeros = [5,2,9,1,7];

// orden ascendente
numeros.sort((a,b) => a - b);
console.log(numeros); // [1,2,5,7,9]

// orden descendente
numeros.sort((a,b) => b - a);
console.log(numeros); // [9,7,5,2,1]

// Arreglo de cadenas 
let frutas = ["banana","manzana","naranja","uva"];
frutas.sort();
console.log(frutas);

//orden alfabetico
frutas.sort((a,b) => b.localeCompare(a));
console.log(frutas);


let personas = [
    {nombre: "Juan",edad:25},
    {nombre:"Ana", edad : 30},
    {nombre: "Pedro", edad:20}
];  

personas.sort((a,b) => a.edad - b.edad);
console.log(personas);

personas.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(personas);

let numeros1 = [1, 2, 3, 4, 5];
numeros1.reverse(); 
console.log(numeros1);// [5, 4, 3, 2, 1]

let palabras = ["hola","mundo","javascript"];
palabras.reverse();
console.log(palabras);

let calificaciones =[
    {estudiante: "Eliab",asignatura: "Matematica",calificacion: 60},
    {estudiante: "Xiomara",asignatura: "Historia",calificacion: 100},
    {estudiante: "Camilo",asignatura: "Español",calificacion: 80},
    {estudiante: "Ramiro",asignatura: "Fisica",calificacion: 55},
    {estudiante: "Ana",asignatura: "Quimica",calificacion: 77},
];

calificaciones.sort((a,b) => b.calificacion - a.calificacion);
console.log(calificaciones);

calificaciones.sort((a,b) => b.asignatura.localeCompare(a.asignatura));
console.log(calificaciones);


//1. Dado un arreglo de números [10, 3, 8, 1, 6], ordénalo en orden ascendente utilizando el método sort(). 

    let numeros2 = [10, 3, 8, 1, 6];

numeros2.sort((a, b) => a - b);
console.log(numeros2); // [1, 3, 6, 8, 10]


// 2. Dado un arreglo de cadenas ["perro", "gato", "elefante", "ardilla"], ordénalo alfabéticamente sin modificar el arreglo original.

let animales = ["perro", "gato", "elefante", "ardilla"];
let animalesOrdenados = [...animales].sort();
console.log(animalesOrdenados);
console.log(animales); 


//3. Dado un arreglo de objetos [{ nombre: "Luis", puntaje: 85 }, { nombre: "Marta", puntaje: 92 }, { nombre: "Sofía", puntaje: 78 }], ordénalo por puntaje en orden descendente.   
let estudiantes = [
    { nombre: "Luis", puntaje: 85 },
    { nombre: "Marta", puntaje: 92 },
    { nombre: "Sofía", puntaje: 78 }
];

estudiantes.sort((a, b) => b.puntaje - a.puntaje);
console.log(estudiantes);

//4. Dado un arreglo de números [4, 9, 2, 7, 5], invierte su orden utilizando el método reverse().
let numeros3 = [4, 9, 2, 7, 5];

numeros3.reverse();
console.log(numeros3);
//5. Dado un arreglo de objetos [{ producto: "Laptop", precio: 1200 }, { producto: "Teléfono", precio: 800 }, { producto: "Tableta", precio: 600 }], ordénalo por precio en orden ascendente sin modificar el arreglo original.
let productos = [
    { producto: "Laptop", precio: 1200 },
    { producto: "Teléfono", precio: 800 },
    { producto: "Tableta", precio: 600 }
];

let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);


//6. Dado un arreglo de cadenas ["manzana", "banana", "kiwi", "fresa"], invierte su orden y luego ordénalo alfabéticamente.
let frutas1 = ["manzana", "banana", "kiwi", "fresa"];

frutas1.reverse();
console.log(frutas1); 

frutas1.sort(); 
console.log(frutas1); 

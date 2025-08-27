let arreglo = [1, 2, 3, "texto", true];

//la unica diferencia es el alcance
const arreglo2 = [1, 2, 3, "texto", true];

let arreglo3 = new Array(1,2,3);

let arreglo4 = [];

let arreglo5 = [{}, {}, {}];

let arreglo6 = [{"Nombre":"Kreivin","edad":21},{},{},{}];

let arreglo7 = [[{},{}],["A",1,2],[true,false]];

let numeros = [1, 2, 3];
let longitud1 = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud1); // 5

let letras = ['b', 'c'];
let longitud = letras.unshift('a');
console.log(letras); // ['a', 'b', 'c']
console.log(longitud); // 3

let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

let numero = [10, 20, 30, 20, 40];
let indice = numero.indexOf(20); // 1
let indiceDesde2 = numero.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3

let arreglo1 = [1, 2, 3];
console.log(arreglo1.length); // 3
arreglo1.length = 1; // Trunca a [1]
arreglo1.length = 5; // Extiende a [1, undefined, undefined,undefined, undefined]


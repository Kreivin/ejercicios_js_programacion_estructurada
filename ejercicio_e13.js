const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15


const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100

const nombres = ["Ana", "Luis", "Pedro", "María"];
const encontrado = nombres.find(nombre => nombre.startsWith("P"));
console.log(encontrado); // "Pedro"

// menor a 10
constedadad = [25,35,51,10,8,13]
const menorde10 = edadad.find(edad => edad < 10);
console.log(menorde10); // 8

const usuarios = [
{ id: 1, nombre: "Carlos" },
{ id: 2, nombre: "Lucía" },
{ id: 3, nombre: "Marta" }
];

const usuario = [
{ id: 1, nombre: "Carlos", salario: 20000 },
{ id: 2, nombre: "Lucía", salario: 17000 },
{ id: 3, nombre: "Marta", salario: 11500 },
{ id: 4, nombre: "eliab", salario: 1000 },
];

const salariosBajos = usuarios.filter(u => u.salario < 15000);
console.log(salariosBajos);

const usuarioConSalario = usuario.find(u => u.salario > 15000);
console.log(usuarioConSalario);


const todosSalariosaltos = usuario.every(u => u.salario > 15000);
console.log(todosSalariosaltos); // false

console.log("Hay usuarios con un salario mayor a 15000:", todosSalariosaltos);


const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false

const notas = [5, 8, 9, 3];
const hayReprobados = notas.some(nota => nota < 6);
console.log(hayReprobados); // true

const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];

const agotado = inventario.some(item => item.cantidad === 0);
console.log(agotado); // true


const numeros1 = [5, 10, 15, 20, 25];
const mayoresQue15 = numeros1.filter(num => num > 15);
console.log(mayoresQue15); // [20, 25]

const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];


const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");
console.log(desarrolladores);
// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]


const personas = [
  { id: 1, nombre: "Ana", edad: 17 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 3, nombre: "Marta", edad: 30 },
  { id: 4, nombre: "Pedro", edad: 15 },
  { id: 5, nombre: "Sofía", edad: 25 },
  { id: 6, nombre: "Diego", edad: 40 },
  { id: 7, nombre: "Carla", edad: 19 },
  { id: 8, nombre: "Jorge", edad: 33 },
  { id: 9, nombre: "Lucía", edad: 28 },
  { id: 10, nombre: "Raúl", edad: 16 },
  { id: 11, nombre: "Elena", edad: 21 },
  { id: 12, nombre: "Andrés", edad: 35 }
];

//Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual a 18 años.
const mayoresDe18 = personas.filter(persona => persona.edad >= 18);
console.log(mayoresDe18);

//Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".
const nombreConL = personas.find(persona => persona.nombre.startsWith("L"));
console.log(nombreConL);

// Calcula la suma total de las edades de todas las personas en el arreglo.
const sumaEdades = personas.reduce((acc, persona) => acc + persona.edad, 0);
console.log(sumaEdades);

//Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.
const todosMayoresDe15 = personas.every(persona => persona.edad >= 15);
console.log(todosMayoresDe15); // true

// Comprueba si existe al menos una persona en el arreglo que tenga 40 años
const hayAlguienDe40 = personas.some(persona => persona.edad == 40);
console.log(hayAlguienDe40); // true
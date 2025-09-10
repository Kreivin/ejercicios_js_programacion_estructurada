let agregarelementos = (arreglo,elementos) => {
    let nuevoarreglo = arreglo.push(...elementos);
    return arreglo;
}

let numeros = [1,2,3];
console.log(agregarelementos(numeros,4));

//ejercicio 2
// ...existing code...

// Ejercicio 2
const agregarAlInicio = (arreglo, ...elementos) => {
    arreglo.unshift(...elementos);
    return arreglo;
};

let numero = [1, 2, 3];
console.log(agregarAlInicio(numero, 0));


//ejercicio 3

let eliminarelementofinal = (arreglo) => {
    let ultimo = arreglo.pop();
    return ultimo;
}

let ultimo3 = [1, 2, 3, 4, 5];
console.log(eliminarelementofinal(ultimo3));

//ejercicio 4
let eliminarelementoinicio = (arreglo) => {
    let primero = arreglo.shift();
    return primero;
} 
let primero4 = [1, 2, 3, 4, 5];
console.log(eliminarelementoinicio(primero4));
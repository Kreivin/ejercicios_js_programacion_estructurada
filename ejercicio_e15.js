//Busqueda lineal -----------------
function busquedaLineal(arr, valor){
    for (let i = 0; i< arr.length; i++){
        if (arr [i]=== valor){
            return i;
        }
    }
    return -1;
}
let numeros = [8,3,10,5,2];
console.log(busquedaLineal(numeros, 10));
console.log(busquedaLineal(numeros, 7));

//Busqueda binaria -----------------
function busquedaBinaria(arr, valor){
    let inicio = 0;
    let fin = arr.length -1;

    while (inicio <= fin){
        let medio = Math.floor((inicio + fin)/2);

    if (arr[medio]=== valor){
        return medio;
    }else{
        if (arr[medio]< valor){
            inicio = medio + 1;
        }else{
            fin = medio -1;
        }
    }
    }
    return -1;
}

let numeros1 = [2,5,8,10,15,20];
console.log(busquedaBinaria(numeros1, 10));
console.log(busquedaBinaria(numeros1, 9));

//Busqueda binaria -----------------
function busquedaBinaria(arr, valor){
    let inicio = 0;
    let fin = arr.length -1;

    while (inicio <= fin){
        let medio = Math.floor((inicio + fin)/2);

        if (arr[medio] === valor){
            return medio;
        }else{
            if (arr[medio] < valor){
                inicio = medio + 1;
            }else{
                fin = medio -1;
            }
        }
    }
    return -1;
}

let numeros2 = [2,5,8,10,15,20];
console.log(busquedaBitacoraia(numeros2, 10));
console.log(busquedaBinaria(numeros2, 9));

// busqueda lineal-----------------
function busquedaLineal(arr, valor){
    for(let i = 0; i< arr.length; i++){
        if (arr[i] === valor){
            return i;
        }
    }
    return -1;
}

let letras = ["a","c","d","f","g"];
console.log(busquedaLineal(letras, "f"));
console.log(busquedaLineal(letras, "z"));

// busqueda bitacora -----------------
function busquedaBinaria(arr, valor){
    let inicio =0;
    let fin = arr.length -1;

    while (inicio <= fin){
        let medio = Math.floor((inicio + fin)/2);

        if(arr[medio]=== valor){
            return medio;
        }else{
            if(arr[medio]< valor){
                inicio = medio +1;
            }else{
                fin = medio -1;
            }
        }
    }
    return -1;
}

let letras1 = ["a","b","c","d","e","f"];
console.log(busquedaBinaria(letras1, "d"));
console.log(busquedaBinaria(letras1, "z"));

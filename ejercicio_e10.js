const partidos = [{
    juego :1,
    toros: 0,
    sanfernando: 4
},
{
juego:2,
toros: 6,
sanfernando: 5
},
{
juego:3,
toros: 8,
sanfernando: 3
},
{juego:4,
toros: 5,
sanfernando: 8
},
{juego:5,
toros: 7,
sanfernando: 6
},     
{juego:6,
toros: 3,
sanfernando: 9
},
{juego:7,
toros: 10,
sanfernando: 7
},
];

// eliminacion del primer partido
const p1 = partidos.shift();

//resultados del primer partido
console.log(`resultados de los partidos ${p1.juego}:los toros ${p1.toros} - san fernando ${p1.sanfernando}`);


// eliminacion del primer partido
const p2 = partidos.shift();

//resultados del primer partido
console.log(`resultados de los partidos ${p2.juego}:los toros ${p2.toros} - san fernando ${p2.toros.sanfernando}`);


console.log(`resultados de los partidos ${partidos[0].juego}:los toros ${partidos[0].toros.sanfernando }`);
partidos.shift();

console.log(`resultados de los partidos ${partidos[1].juego}:los toros ${partidos[1].toros.sanfernando }`);
partidos.shift();

console.log(`resultados de los partidos ${partidos[2].juego}:los toros ${partidos[2].toros.sanfernando }`);
partidos.shift();

const munpartidos = partidos.length;
for(let i=0; i < partidos.length; i++){
const p= partidos.shift();
console.log(`resultados de los partidos ${p.juego}:los toros ${p.toros} - san fernando ${p.toros.sanfernando}`);
}

partidos.forEach((p) => {
    partidos.shift();
    console.log(`resultados de los partidos ${p.juego}:los toros ${p.toros} - san fernando ${p.toros.sanfernando}`);
});
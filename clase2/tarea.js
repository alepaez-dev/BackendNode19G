/**
 * Reduce
 */

// Input -> Entrada
 const nombres = [
  "Paco",
  "Lorena",
  "Kike",
  "Abraham",
  "Cris",
  "Victor",
  "Marco",
  "Israel",
  "Annie",
  "Ërnesto",
  "Francisco",
  "Lenny",
  "Rod",
  "Noemi",
  "Benjamin",
];

// Output -> lo que me van a regresar
const objeto = {
  "Paco": 4,
  "Lorena" : 6,
  "Kike" : 4,
  "Abraham" : 7,
  "Cris" : 4,
}

const resultado = nombres.reduce((acc, currentValue) => ({...acc, [currentValue]: currentValue.length}), {})
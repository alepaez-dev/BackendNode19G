// Process


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

/**
 * Generar un script que reciba un parametro y nos diga si el nombre esta en el arreglo nombres. Si si esta
 * que nos imprima si estas. Y si no, que imprima Afuera de aqui
 */

// Tienes parametro
let strNombre = ""
if (process.argv[2] !== undefined) {
  strNombre = process.argv[2] // aaa, length = 3
}

console.log(strNombre);

const siExiste = nombres.filter(nombre => nombre === strNombre)
console.log("siExiste", siExiste)

// condicional
if (siExiste.length >= 1) {
  console.log(`Bienvenido ${strNombre}`)
} else {
  console.log("Afuera de aqui")
}

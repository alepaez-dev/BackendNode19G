/**
 * Hacer una funcion que reciba como parametro un nombre, y me imprima, Hola {nombre}, como estan ?
 */

/**
 * No se manipula la DOM
 * No se manipula la BOM
 */

console.log("hello koders")

function saludar(nombre) {
  return `Hola ${ nombre} como estas`;
}

const resultadoSaludar = saludar("Bere")

/**
 * Separar del arreglo nombres los que tienen < de 5 letras y > 5 letras
 */

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
];

const nombresMenores = nombres.filter(nombre => {
  if(nombre.length < 5) {
    return nombre
  }
})

const nombresMenores2 = nombres.filter(nombre => nombre.length < 5);
const nombresMayores2 = nombres.filter(nombre => nombre.length >= 5);
// console.log(nombresMenores2)
// console.log(nombresMayores2)


const separar = () => {
  let nombresMenoresArray = []
  let nombresMayoresArray = []

  nombres.forEach(nombre => {
   
    if(nombre.length < 5) {
      nombresMenoresArray.push(nombre);
    } else {
      nombresMayoresArray.push(nombre);
    }
  })

  // Destructuracion
  return [nombresMenoresArray, nombresMayoresArray]
}

// Destructuracion
const [nombresMenoresArray, nombresMayoresArray] = separar()

const resultado = separar()
console.log("resultado", resultado[0])
console.log("resultado", resultado[1])
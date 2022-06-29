const colors = require('colors');

// Imprimir en consola/terminal, Hola me llamo ${nombre} en arcoiris
if (process.argv[2] !== undefined) {
  console.log(`Hola mi nombre es ${process.argv[2]}`.rainbow);

}

const fs = require("fs")

function pako(error) {
  if(error) {
    console.log(error)
    return
  }
  console.log("Se escribio exitosamente")
}

fs.writeFile("ejemplo.txt", "Contenido de ejemplo.txt CONTENIDO NUEVO", "utf8", pako)

fs.readFile('ejemplo.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.unlink('ejemplo.txt', (err) => {
  if (err) throw err;
  console.log('ejemplo.txt was deleted');
});

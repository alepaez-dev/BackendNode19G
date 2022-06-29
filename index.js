const fs = require("fs")

function pako(error) {
  if(error) {
    console.log(error)
    return
  }
  console.log("Se escribio exitosamente")
}

fs.writeFile("ejemplo.txt", "Contenido de ejemplo.txt CONTENIDO NUEVO", "utf8", pako)
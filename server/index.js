const http = require("http")

const server = http.createServer((request, response) => {
  // Escribiendo
  response.write("Hola desde mi servidor, hola mundo")


  // Acabar
  response.end() // -> como el return de los servidores
})

// Listening
// 1- PORT
// 2- CALLBACK
server.listen(8080, () => {
  console.log("Mi servidor esta escuchando")
})
const fs = require("fs/promises")

// Promesas
/**
 * Status/Estado
 * 1 - Rechazada
 * 2 - Acceptada
 * 3 - Pending
 * 
 * new Promise((resolve, reject) => {})
 * Resolve -> FUNCTION -> Cuando ya se cumplio, pasa al estado accepted, lo que tenia que hacer la promesa, y se resuelve -> si se construyo
 * Reject -> FUNCTION -> Cuando no se cumple y pasa a su estado rejected, y no se resuelve -> No se cumplio
 * 
 * Then -> Cuando ya se ejecuto, se cumplio 
 * Catch -> Error -> imprimir
 */

const muro = {
  construido: false,
  aplanado: false,
  pintado: false
}

// Declarando
const construir = (muro) => {
  // Haciendo mi promesa, declarandola
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Ejecucion
      muro.construido = true
      // Ya se resolvio mi promesa
      if(muro.construido){
        resolve(muro) // -> me ahorro return, es un return -> then recibe esto
      } else {
        reject(new Error("No se pudo construit")) // catch recibe esto
      }
    }, 3000)
  })
}

const aplanar = (muro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.aplanado = false
      // -> Logica negativa
      if(!muro.aplanado){ // -> no se cumple
        reject(console.log("No se pudo aplanar")) // -> re
        return
      } 
      // Continuamos
      resolve(muro)
    },3000)
  })
}

const pintar = (muro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.pintado = true
      // -> Logica negativa
      if(!muro.pintado){ // -> no se cumple
        reject(new Error("No se pudo pintar"))
        return
      } 
      // Continuamos
      resolve(muro)
    },3000)
  })
}

construir({...muro})
  .then((muroConstruido) => {
    console.log(muroConstruido)
    aplanar(muroConstruido)
      .then((muroAplanado) => {
        console.log(muroAplanado)
        pintar(muroAplanado)
          .then((muroPintado) => console.log("exito", muroPintado))
          .catch((err) => console.log("error", err))
      })
      .catch((error) => console.log("error", error))
  })
  .catch((error) => console.log("error", error));


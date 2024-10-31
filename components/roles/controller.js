const storage = require('./storage')

function agregarRol(dato){
  return new Promise((resolve, reject) => {
    resolve( storage.agregar(dato))
  })
}

function obtenerRol(filtro){
  return new Promise((resolve, reject) => {
    resolve(storage.obtener(filtro))
  })
}

module.exports = {
  agregarRol,
  obtenerRol
}
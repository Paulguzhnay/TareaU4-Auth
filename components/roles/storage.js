const Model = require('./model')

async function agregarRol(dato) {
  const resultado = await new Model(dato)
  const rol = resultado.save()
  return rol
}

async function obtenerRol(filtro) {
  let lista = {}

  if(filtro.name != null){
    lista = {name: filtro.name}
  }
  const resultado = await Model.find(lista)
  return resultado
}

module.exports = {
  agregar:agregarRol,
  obtener:obtenerRol
}
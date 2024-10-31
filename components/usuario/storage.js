const model = require('./model')
const model_rol = require('../roles/model')

async function insertar_usuario(dato) {
    const resultado = await new model(dato)
    resultado.password = await model.encrypted_password(resultado.password)
    return resultado.save()
}

async function obtener_usuario(dato) {
     let filter = {}

     if (dato.apellido) {
        filter = { apellido: dato.apellido }
     }
     
     const resultado = await model.find( filter )
     return resultado
}

module.exports = {
    insertar:insertar_usuario,
    obtener:obtener_usuario,
}
const Model = require('./model')

async function agregarMateria( dato ) {
    const resultado = await new Model( dato )
    const Materia = resultado.save()
    return Materia
}

async function obtenerMateria( filtro ) {
    let mi_filtro = {}

    if (filtro.codigo != null) {
        mi_filtro = { codigo: filtro.codigo }
    }
    const resultado = await Model.find( mi_filtro )
    return resultado
}


async function actualizarMateria(dato) {
    const nuevo_objeto = await Model.findOne( { codigo: dato.codigo } )

    nuevo_objeto.nombre = dato.nombre 
    
    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminarMateria(dato) {
    const resultado = await Model.deleteOne( {codigo: dato.codigo} )
    return resultado
}

module.exports = {
    agregar:agregarMateria,
    obtener:obtenerMateria,
    actualizar:actualizarMateria,
    eliminar:eliminarMateria
}
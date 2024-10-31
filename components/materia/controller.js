const storage = require('./storage')

function agregarMateria( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerMateria( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarMateria( dato ) {
    return new Promise((resolve, reject) => {      
        resolve( storage.actualizar( dato ) )
    })
}

function eliminarMateria( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarMateria,
    obtenerMateria,
    actualizarMateria,
    eliminarMateria
}
const usuario = require('../components/usuario/interface')
const rol = require('../components/roles/interface')
const auth = require('../components/auth/interface')
const materia = require('../components/materia/interface')

const routes = function( server ) {
    server.use('/usuario', usuario)
    server.use('/auth', auth)
    server.use('/rol', rol)
    server.use('/materia', materia)
}

module.exports = routes
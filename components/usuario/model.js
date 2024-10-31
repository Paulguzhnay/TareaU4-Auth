const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const req_rol = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roles'
}

const usuario_schema = new schema({
    nombre: req_string,
    apellido: req_string,
    username: req_string,
    password: req_string,
    rol: req_rol,
    fecha_registro: Date,
    fecha_actualizacion: Date,
}, {
    timestamps: { createdAt: 'fecha_registro', updatedAt: 'fecha_actualizacion' }
})

usuario_schema.statics.encrypted_password = (password) =>{
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(password, salt)
}

usuario_schema.statics.compare_password = (password, received_password) =>{
    return bcryptjs.compareSync(password, received_password)
}

const model = mongoose.model('Usuario', usuario_schema)
module.exports = model
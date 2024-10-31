const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const materia_schema = new Schema({
    codigo: req_string,
    nombre: req_string,
}) 

const model = mongoose.model('materia', materia_schema)
module.exports = model
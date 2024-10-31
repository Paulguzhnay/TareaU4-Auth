const express = require('express')
const controller = require('./controller')
const init = require('./initialSetup')
const response = require('../../network/response')

const routes = express.Router()

routes.get('/', function(req, res){
  //init.crear_roles()
  const filtro = req.query || null
  controller.agregarRol(filtro)
    .then((data) => response.success(req, res, data, 200))
})

module.exports = routes
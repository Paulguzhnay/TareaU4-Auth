const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')
const auth_jwt = require('../middlewares/auth.jwt')
const routes = express.Router()


routes.post('/', [auth_jwt.verify_token, auth_jwt.is_admin], function(req, res){
    controller.agregarMateria( req.body )
        .then((data) => {
            // Emitir notificacion cuando se agrega una Materia.
            const notificacionMateria = {                
                nombreMateria: req.body.nombre
            };              
            req.io.emit('notificacionMateria', notificacionMateria);
            console.log('notificacionMateria exitosa');
            response.success(req, res, data, 201);
        })
        .catch((error) => response.error(req, res, error, 400));
});

routes.get('/',[auth_jwt.verify_token, auth_jwt.is_admin], function(req, res){
    const filtro = req.body || null
    controller.obtenerMateria( filtro )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.put('/', [auth_jwt.verify_token, auth_jwt.is_admin], function(req, res){
    controller.actualizarMateria( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.delete('/', [auth_jwt.verify_token, auth_jwt.is_admin], function(req, res){
    controller.eliminarMateria( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})

module.exports = routes
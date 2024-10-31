const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')
const auth_jwt = require('../middlewares/auth.jwt')

const routes = express.Router()

routes.post('/', auth_jwt.is_admin,function(req, res){
    controller.sign_in( req )
    .then( (data) => {
        console.log(data)
        response.success(req, res,data, 201) 
    })
    .catch((error) => response.error(req, res, error, 400));
});

routes.post('/signup',auth_jwt.verify_token, function(req, res){
    controller.sign_up( req, res )
    .then( (data) => response.success(req, data, null, 201) )
    .catch((error) => response.error(req, res, error, 400));
});

module.exports = routes
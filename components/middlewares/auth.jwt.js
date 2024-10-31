const jwt = require('jsonwebtoken')
const config = require('../../config')
const User = require('../usuario/model')
const Role = require('../roles/model')

async function verify_token(req, res, next) {
  try {
      const token = req.headers['x-access-token']
      if (!token) {
          return res.status(403).json({ message: 'No token provided.' })
      }
      const decoded = jwt.verify(token, config.SECRET)
      req.user_id = decoded.id
      const user = await User.findById(decoded.id)
      if (!user) {
          return res.status(404).json({ message: 'no user found.' })
      }

      next()
  } catch (error) {
      console.log(error)
      return res.status(401).json({ message: 'Unauthorized' })
  }
}

async function is_admin(req, res, next) {
  const usernameUser = req.headers['x-access-username']
  const user = await User.find({ username: usernameUser })
  if (user.length) {
      const roles = await Role.find({ _id: { $in: user[0].rol } })
      for (let i = 0; i < roles.length; i++) {
          if (roles[i].name == 'admin') {
              next()
              return
          }
      }
  }
  return res.status(403).json({ message: 'Debe ser un usuario admin para continuar.' })
}

module.exports = {
  verify_token,
  is_admin
}
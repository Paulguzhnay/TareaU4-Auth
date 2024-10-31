const Rol = require('./model')

async function crear_roles(){
  try{
    const count = await Rol.estimatedDocumentCount()
    if(count > 0){
      return
    }

    const values = await Promise.all([
      new Rol({name: 'usuario'}).save(),
      new Rol({name: 'admin'}).save()
    ]) 

    console.log(values)
  } catch(error){
    console.log(error)
  }
}

module.exports = {
  crear_roles
}
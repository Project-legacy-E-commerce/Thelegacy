const Routeruser = require('express').Router()
const controlleruser = require('../controller/usercontroller')
const {checkToken} = require('../controller/authorization')


Routeruser.get('/getusers',checkToken,controlleruser.GetAllUser)
Routeruser.post('/signup',controlleruser.addAccount)
Routeruser.post('/login',controlleruser.login)
Routeruser.delete('/deleteuser/:iduser',controlleruser.DeleteUser)
Routeruser.put('/updateuser/:iduser',controlleruser.UpdateUser)



module.exports= Routeruser
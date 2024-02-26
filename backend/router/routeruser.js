const Routeruser = require('express').Router()
const controlleruser = require('../controller/usercontroller')
const {checkToken} = require('../controller/authorization')


Routeruser.get('/getusers',controlleruser.GetAllUser)
Routeruser.post('/signup',controlleruser.addAccount)
Routeruser.post('/login',controlleruser.login)
Routeruser.delete('/deleteuser/:iduser',controlleruser.DeleteUser)
Routeruser.put('/updateuser/:iduser',controlleruser.UpdateUser)
Routeruser.get('/getSellers',controlleruser.GetAllSellers)
Routeruser.get('/getClients',controlleruser.GetAllBuyers)
Routeruser.get('/getallusers',controlleruser.GetAllUser)




module.exports= Routeruser
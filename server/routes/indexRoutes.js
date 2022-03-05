const indexRoutes = require('express').Router()
const userController = require('../controllers/userControllers')
const { errorHandler } = require('../middlewares/handleError')
const menusRoutes = require('./menusRoutes')

indexRoutes.post('/register', userController.createUser)
indexRoutes.post('/login', userController.handleUserLogin)

indexRoutes.use('/menus', menusRoutes)

indexRoutes.use(errorHandler)


module.exports = indexRoutes
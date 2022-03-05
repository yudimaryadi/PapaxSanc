const indexRoutes = require('express').Router()
const orderController = require('../controllers/ordersController')
const userController = require('../controllers/userControllers')
const { errorHandler } = require('../middlewares/handleError')
const { loginAuth } = require('../middlewares/loginAuth')
const customerRoutes = require('./customerRoutes')
const menusRoutes = require('./menusRoutes')

indexRoutes.post('/register', userController.createUser)
indexRoutes.post('/login', userController.handleUserLogin)

indexRoutes.use('/menus', menusRoutes)
indexRoutes.get('/orders', loginAuth, orderController.showAllOrder)
indexRoutes.use('/pub', customerRoutes)

indexRoutes.use(errorHandler)


module.exports = indexRoutes
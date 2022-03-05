const customerRoutes = require('express').Router()
const customerController = require('../controllers/customerController')
const ordersRoutes = require('./ordersRoutes')

customerRoutes.get('/menus', customerController.showAllMenus)

customerRoutes.post('/register', customerController.handleRegisterCustomer)
customerRoutes.post('/login', customerController.handleLoginCustomer)
customerRoutes.post('/loginGoogle', customerController.onGoogle)

customerRoutes.get('/menus/fav', customerController.showMenusFavorite)

customerRoutes.get('/menus/:menusId', customerController.showMenusById)

customerRoutes.use('/order', ordersRoutes)


module.exports = customerRoutes
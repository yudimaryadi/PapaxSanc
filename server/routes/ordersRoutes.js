const ordersRoutes = require('express').Router()
const orderController = require('../controllers/ordersController')
const { loginAuth } = require('../middlewares/loginAuth')

ordersRoutes.get('/', loginAuth, orderController.getOrder)
ordersRoutes.post('/:id', loginAuth, orderController.createOrder)

module.exports = ordersRoutes
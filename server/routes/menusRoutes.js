const menusRoutes = require('express').Router()
const menusContoller = require('../controllers/menusControllers')
const { loginAuth } = require('../middlewares/loginAuth')

menusRoutes.get('/', loginAuth, menusContoller.getAllMenu)
menusRoutes.post('/', loginAuth, menusContoller.createMenus)

menusRoutes.get('/:menusId', loginAuth, menusContoller.getMenusById)
menusRoutes.put('/:menusId', loginAuth, menusContoller.updateMenus)
menusRoutes.delete('/:menusId', loginAuth, menusContoller.deleteMenus)
menusRoutes.patch('/:menusId', loginAuth, menusContoller.patchMenus)


module.exports = menusRoutes
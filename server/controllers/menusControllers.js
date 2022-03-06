const {Menu, User, Category, Table} = require('../models')

class menusContoller{
  static getAllMenu(req, res, next){
    Menu.findAll({
      include:[{
        model: User,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      }, Category],
      order: [['id', 'DESC']]
    })
    .then((result) => {
      res.status(200).json({data: result, user: req.user})
    }).catch((err) => {
      next(err)
    });
  }

  static createMenus(req, res, next){
    const {name, description, price, imageUrl, categoryId} = req.body
    console.log(req.user.id);
    Menu.create({
      name,
      description,
      price,
      imageUrl,
      UserId: req.user.id,
      CategoryId: +categoryId
    })
    .then((result) => {
      console.log(result);
      res.status(201).json(result)
    }).catch((err) => {
      next(err)
    });
  }

  static getMenusById(req, res, next){
    Menu.findOne({
      where: {
        id: req.params.menusId
      },
      include: [{
        model: User,
        attributes: ["email", "role", "address", "phoneNumber"]
      }, Category]
    })
    .then((result) => {
      if (!result) throw {name : 'id not found'}
      res.status(200).json(result)
    }).catch((err) => {
      next(err)
    });
  }

  static updateMenus(req, res, next){
    const {name, description, price, imageUrl, categoryId} = req.body

    Menu.findByPk(+req.params.menusId)
    .then((menu) => {
      if (req.user.role !== 'admin') throw {name : 'Must be Admin'}
      if (!menu) throw {name : 'id not found'}
      return Menu.update({
        name,
        description,
        price,
        imageUrl,
        CategoryId: +categoryId
      },{ 
        where : {
          id: req.params.menusId
        },
        returning : true
      })

    })
    .then((menu) => {
      res.status(200).json(menu[1])
    }).catch((err) => {
      next(err)
    });
  }

  static deleteMenus(req, res, next){
    const obj = {}
    
    Menu.findByPk(+req.params.menusId)
    .then((result) => {
      if (req.user.role !== 'admin') throw {name : 'Must be Admin'}
      if (!result) throw {name : 'id not found'}

      obj.menu = result

      return Menu.destroy({
        where: {
          id: req.params.menusId
        }
      })

    })
    .then(() => {
      res.status(200).json({"message" : `${obj.menu.name} success to delete`})
    }).catch((err) => {
      next(err)
    });
  }

  static patchMenus(req, res, next){
    const { status } = req.body
    const obj = {}

    if (req.user.role !== 'admin') throw ({name : 'Must be Admin'})

    Menu.findByPk(+req.params.menusId)
    .then((result) => {
      obj.menus = result

      if (!result) throw {name : 'id not found'}

      return Menu.update({
        status
      }, {
        where: {
        id: req.params.menusId
      }, returning : true
      })
    })
    .then((menu) => {
      res.status(200).json({menus : menu[1]})
    }).catch((err) => {
      next(err)
    });
  }
}

module.exports = menusContoller
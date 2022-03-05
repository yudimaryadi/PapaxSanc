const {Order, User, Table, Category, Menu} = require('../models')

class orderController{
  static getOrder(req, res, next){
    Order.findAll({
      include: [
        {
          model: Menu,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        },
        {
          model: Table,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }
      ],
      where: {
        UserId : req.user.id
      }
    })
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      next(err)
    });
  }

  static createOrder(req, res, next){
    Menu.findByPk(+req.params.id)
    .then((result) => {
      console.log(result.id);
      if (req.user.role !== 'customer') throw {name : 'forbidden'}
      if (!result) throw { name : 'id not found' }

      return Order.create({
        MenusId: result.id,
        UserId: req.user.id,
        TableId: req.body.table
      })
    })
    .then((order) => {
      res.status(201).json(order)
    }).catch((err) => {
      next(err)
    });
  }

  static showAllOrder(req, res, next){
    Order.findAll({
      include: [
        {
          model: Menu,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        },
        {
          model: Table,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }
      ]
    })
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      next(err)
    });
  }
}

module.exports = orderController
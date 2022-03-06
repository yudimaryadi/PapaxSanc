const {Menu, Category, User} = require('../models')
const {Op} = require('sequelize')
const { comparePassword } = require('../helpers/bcrypt')
const { sign } = require('../helpers/handleJwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_ID);


class customerController {
  static handleRegisterCustomer(req, res, next){
    const {email, password, phoneNumber, address} = req.body

    User.create({
      email,
      password,
      role : 'customer',
      phoneNumber,
      address
    })
    .then((result) => {
      res.status(201).json({
        id : result.id,
        email: result.email
      })
    }).catch((err) => {
      next(err)
    });
  }

  static handleLoginCustomer(req, res, next){
    const {email, password} = req.body

    User.findOne({
      where: {
        email
      }
    })
    .then((data) => {
      if (data && comparePassword(password, data.password)){
        res.status(200).json({access_token : sign({id : data.id, email: data.email})})
      }else {
        throw ({name : 'invalid email or password'})
      }
    }).catch((err) => {
      next(err)
    });
  }

  static onGoogle(req, res, next){
    client.verifyIdToken({
      idToken: req.body.id_token,
      audience: process.env.GOOGLE_ID
    })
    .then(ticket => {
        const payload = ticket.getPayload();
        const {email} = payload
        
        return User.findOrCreate({
            where: {
                email
            },
            defaults: {
                password: 'Pdfiuwe12aDAjdawdDWjDJA',
                role: 'customer'
            }
        })
    })
    .then(([user, isCreated])=>{

        let code = 200
        if (isCreated) code = 201

        res.status(code).json({access_token : sign({id : user.id, email: user.email}), user: user.email})
    })
    .catch((err) => {
        next(err)
    });
  
  }

  static showMenusFavorite(req, res, next){
    let name = req.query.name || ''
    let category = req.query.category || ''

    let page = +req.query.page || 1
    let offset_count

    if (!page || page === 1) {
      offset_count = 0
    } else {
      offset_count  = page - 1
    }

    let page_count

    Menu.findAndCountAll({
      include: [
        { 
          model: User, 
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"]
          }
        },
        {
          model : Category,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          },
          where : {
            name : {
              [Op.iLike] : `%${category}%`
            }
          }
        }
      ],
      where : {
        status : 'available',
        name : {
          [Op.iLike] : `%${name}%`
        }
      },
      order: [['id', 'ASC']],
      limit : 3,
      offset : offset_count * 3
    })
    .then((data) => {
      console.log(data);
      page_count = Math.floor(data.count/4)
      if (data.count % 4) {
        page_count += 1
      }

      res.status(200).json({
        totalItems : data.count,
        totalPages : Math.ceil(data.count/3),
        currentPage : Number(page) + 1,
        menus : data
      })
    }).catch((err) => {
        next(err)
    });

  }

  static showAllMenus(req, res, next){
    Menu.findAll({
      include:[{
        model: User,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      }, Category],
      where: {
        status: 'available'
      }
    })
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      next(err)
    });
  }

  static showMenusById(req, res, next){
    Menu.findByPk(+req.params.menusId, {
      include: [
        { 
          model: User, 
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"]
          }
        },
        {
          model : Category,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }
      ]
    })
    .then((result) => {
      if (!result) throw {name : 'id not found'}

      res.status(200).json(result)
    }).catch((err) => {
      next(err)
    });
  }
}

module.exports = customerController
const { sign } = require('../helpers/handleJwt');
const {User, Category, Menu} = require('../models')
const { comparePassword } = require('../helpers/bcrypt')

class userController{
  static createUser(req, res, next){
    const {email, password, phoneNumber, address} = req.body
    User.create({
      email,
      password,
      phoneNumber,
      address
    })
    .then((result) => {
      res.status(201).json({
        id: result.id,
        email: result.email
      })
    }).catch((err) => {
      next(err)
    });
  }

  static handleUserLogin(req, res, next){
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
        throw {name : 'invalid email or password'}
      }
    }).catch((err) => {
      next(err)
    });
  }
}

module.exports = userController
'use strict';
const {
  Model
} = require('sequelize');
const { hashingPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Menu, {foreignKey : "UserId"})
      User.hasMany(models.Order, {foreignKey : "UserId"})

    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate : {
        isEmail: true, 
        notNull: {
          msg : 'Email Not Null'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        len : {
          args : [5],
          msg : 'password minimal 5 character'
        },
        notNull: {
          msg : 'Password Not Null'
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate', (user, options) => {
    user.password = hashingPassword(user.password)
  });
  return User;
};
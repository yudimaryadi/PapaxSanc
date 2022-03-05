'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey : "UserId"})
      Order.belongsTo(models.Table, { foreignKey : "TableId"})
      Order.belongsTo(models.Menu, { foreignKey : "MenusId"})
    }
  };
  Order.init({
    MenusId: DataTypes.INTEGER,
    TableId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
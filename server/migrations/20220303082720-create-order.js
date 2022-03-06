'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MenusId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Menus',
          key: 'id'
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade'
      },
      TableId: {
        type: Sequelize.INTEGER,
        references :{
          model : 'Tables',
          key : 'id'
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade'
      },
      statusOrder: {
        type: Sequelize.STRING,
        defaultValue : 'waiting'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
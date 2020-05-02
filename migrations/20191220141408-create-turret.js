'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Turrets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      width: {
        type: Sequelize.FLOAT
      },
      length: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.FLOAT
      },
      ring_size: {
        type: Sequelize.FLOAT
      },
      barrel_size: {
        type: Sequelize.FLOAT
      },
      default_rotation: {
        type: Sequelize.FLOAT
      },
      default_reload_speed: {
        type: Sequelize.FLOAT
      },
      armor_front: {
        type: Sequelize.FLOAT
      },
      armor_side: {
        type: Sequelize.FLOAT
      },
      armor_rear: {
        type: Sequelize.FLOAT
      },
      armor_top: {
        type: Sequelize.FLOAT
      },
      armor_optics: {
        type: Sequelize.FLOAT
      },
      armor_cupola: {
        type: Sequelize.FLOAT
      },
      optical_range: {
        type: Sequelize.FLOAT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Turrets');
  }
};
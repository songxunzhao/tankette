'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tanks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      turret_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Turrets'
          },
          key: 'id'
        }
      },
      engine_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Engines'
          },
          key: 'id'
        }
      },
      barrel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Barrels'
          },
          key: 'id'
        }
      },
      hull_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Hulls'
          },
          key: 'id'
        }
      },
      battery_id: {
        type: Sequelize.INTEGER,
        references: {
          tableName: 'Batteries'
        },
        key: 'id'
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
    return queryInterface.dropTable('Tanks');
  }
};
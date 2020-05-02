const bcrypt = require('bcrypt');
const environment = process.env.NODE_ENV; // development
const stage = require('../config/config')[environment];

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      gold_coin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      silver_coin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      is_suspeneded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.InventoryItem)
        }
      },
      hooks: {
        beforeCreate: (user, options) =>{
          return new Promise(function(resolve, reject) {
            bcrypt.hash(user.password, stage.saltingRounds, function (err, hash) {
              if(err) {
                console.log('Error hashing password for user', user.name);
                reject('Hash error');
              } else {
                user.password = hash;
                resolve();
              }
            });
          });
        }
      }
    });
  
    return User;
  };
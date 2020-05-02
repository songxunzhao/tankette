'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTurret = sequelize.define('UserTurret', {
    user: DataTypes.INTEGER,
    turret: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {});
  UserTurret.associate = function(models) {
    // associations can be defined here
  };
  return UserTurret;
};
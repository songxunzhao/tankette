'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBattery = sequelize.define('UserBattery', {
    user: DataTypes.INTEGER,
    battery: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {});
  UserBattery.associate = function(models) {
    // associations can be defined here
  };
  return UserBattery;
};
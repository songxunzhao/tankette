'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tank = sequelize.define('Tank', {
    user: DataTypes.INTEGER,
    turret: DataTypes.INTEGER,
    engine: DataTypes.INTEGER,
    barrel: DataTypes.INTEGER,
    hull: DataTypes.INTEGER,
    battery: DataTypes.INTEGER
  }, {});
  Tank.associate = function(models) {
    // associations can be defined here
  };
  return Tank;
};
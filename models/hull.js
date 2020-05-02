'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hull = sequelize.define('Hull', {
    name: DataTypes.STRING,
    width: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    battery_width: DataTypes.FLOAT,
    battery_length: DataTypes.FLOAT,
    battery_height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    engine_width: DataTypes.FLOAT,
    engine_length: DataTypes.FLOAT,
    engine_height: DataTypes.FLOAT,
    turret_ring_size: DataTypes.FLOAT
  }, {});
  Hull.associate = function(models) {
    // associations can be defined here
  };
  return Hull;
};
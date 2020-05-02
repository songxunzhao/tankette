'use strict';
module.exports = (sequelize, DataTypes) => {
  const Battery = sequelize.define('Battery', {
    name: DataTypes.STRING,
    width: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    capacity: DataTypes.FLOAT
  }, {});
  Battery.associate = function(models) {
    // associations can be defined here
  };
  return Battery;
};
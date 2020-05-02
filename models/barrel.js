'use strict';
module.exports = (sequelize, DataTypes) => {
  const barrel = sequelize.define('barrel', {
    name: DataTypes.STRING,
    size: DataTypes.FLOAT,
    length: DataTypes.FLOAT
  }, {});
  barrel.associate = function(models) {
    // associations can be defined here
  };
  return barrel;
};
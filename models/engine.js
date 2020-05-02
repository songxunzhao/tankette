'use strict';
module.exports = (sequelize, DataTypes) => {
  const Engine = sequelize.define('Engine', {
    name: DataTypes.STRING,
    width: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    power: DataTypes.FLOAT,
    consume_rate: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    max_rpm: DataTypes.INTEGER
  }, {});
  Engine.associate = function(models) {
    // associations can be defined here
  };
  return Engine;
};
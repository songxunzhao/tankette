'use strict';
module.exports = (sequelize, DataTypes) => {
  const TankInventoryItem = sequelize.define('TankInventoryItem', {
    name: DataTypes.STRING,
    data: DataTypes.STRING,
    type: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {});
  TankInventoryItem.associate = function(models) {
    // associations can be defined here
    
  };
  return TankInventoryItem;
};
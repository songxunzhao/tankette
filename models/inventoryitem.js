'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryItem = sequelize.define('InventoryItem', {
    type: DataTypes.STRING(64),
    data: DataTypes.TEXT({length: 'long'}),
    seq: DataTypes.INTEGER
  }, {
    indexes: [
      {
        name: 'type_index',
        fields:['type']
      }
    ]
  });
  InventoryItem.associate = function(models) {
    // associations can be defined here
    InventoryItem.belongsTo(models.User)
  };
  return InventoryItem;
};
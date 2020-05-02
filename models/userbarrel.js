'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBarrel = sequelize.define('UserBarrel', {
    count: DataTypes.INTEGER
  }, {});
  UserBarrel.associate = function(models) {
    // associations can be defined here
    UserBarrel.belongsTo(models.User);
    UserBarrel.belongsTo(models.Barrel);

  };
  return UserBarrel;
};
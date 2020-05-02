'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEngine = sequelize.define('UserEngine', {
    user: DataTypes.INTEGER,
    engine: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {});
  UserEngine.associate = function(models) {
    // associations can be defined here
  };
  return UserEngine;
};
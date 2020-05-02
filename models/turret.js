'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turret = sequelize.define('Turret', {
    name: DataTypes.STRING,
    width: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    ring_size: DataTypes.FLOAT,
    barrel_size: DataTypes.FLOAT,
    default_rotation: DataTypes.FLOAT,
    default_reload_speed: DataTypes.FLOAT,
    armor_front: DataTypes.FLOAT,
    armor_side: DataTypes.FLOAT,
    armor_rear: DataTypes.FLOAT,
    armor_top: DataTypes.FLOAT,
    armor_optics: DataTypes.FLOAT,
    armor_cupola: DataTypes.FLOAT,
    optical_range: DataTypes.FLOAT
  }, {});
  Turret.associate = function(models) {
    // associations can be defined here
  };
  return Turret;
};
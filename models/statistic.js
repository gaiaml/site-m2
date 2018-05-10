'use strict';
module.exports = (sequelize, DataTypes) => {
  var Statistic = sequelize.define('Statistic', {
    idUser: DataTypes.INTEGER,
    idCategory: DataTypes.INTEGER,
    timer: DataTypes.INTEGER
  }, {});
  Statistic.associate = function(models) {
    // associations can be defined here
    models.Statistic.belongsTo(models.User, {foreignKey: 'id'})
  };
  return Statistic;
};
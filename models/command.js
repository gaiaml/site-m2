'use strict';
module.exports = (sequelize, DataTypes) => {

  var Command = sequelize.define('Command', {
    idCustomer: DataTypes.INTEGER,
    idProducts: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    batch: DataTypes.STRING
  }, {});
  Command.associate = function(models) {
    models.Command.belongsTo(models.User, {foreignKey: 'id'})
    models.Command.belongsTo(models.Product, {foreignKey: 'idProducts'})
  };
  return Command;
};
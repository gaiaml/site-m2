'use strict';
module.exports = (sequelize, DataTypes) => {

  var Product = sequelize.define('Product', {
    image_url: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    models.Product.hasMany(models.Command, {foreignKey: 'idProducts'})
  };
  return Product;
};
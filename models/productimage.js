'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductImage = sequelize.define('ProductImage', {
    idProduct: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {});
  ProductImage.associate = function(models) {
    // associations can be defined here
    models.ProductImage.belongsTo(models.Product, {foreignKey: 'idProduct'})
  };
  return ProductImage;
};
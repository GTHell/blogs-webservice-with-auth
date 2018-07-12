'use strict';
module.exports = (sequelize, DataTypes) => {
  var PostCategory = sequelize.define('PostCategory', {
    name: DataTypes.STRING
  }, {});
  PostCategory.associate = function(models) {
    // associations can be defined here
  };
  return PostCategory;
};
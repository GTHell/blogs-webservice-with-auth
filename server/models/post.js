'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    id: DataTypes.UUID,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    created_at: DataTypes.DATE
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
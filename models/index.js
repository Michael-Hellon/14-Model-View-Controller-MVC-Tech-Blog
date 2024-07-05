const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Referenced MOD 13 One-to-one, One-to-Many exercise

// Users have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// likewise, User has many comment
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
  });

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
  });

// Post belongs to User
Comment.belongsTo(Post, {
  foreignKey: 'post_id',

  });
// Post belongs to User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  });

module.exports = { User, Post };

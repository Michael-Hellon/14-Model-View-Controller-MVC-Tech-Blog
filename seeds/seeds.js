const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const seedUserData = require('./userData.json');
const seedPostData = require('./postData.json');
// const seedCommentData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUserData, {
    individualHooks: true,
    returning: true,
  });

  for ( const post of seedPostData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
  }

  process.exit(0);
};

seedDatabase();

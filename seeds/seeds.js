const sequelize = require('../config/connection');
// const { User } = require('../models');

const seedUserData = require('./userData');
const seedPostData = require('./postData');
const seedCommentData = require('./userData');

// Don't need a postData, won't be saving post to a seed file.

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUserData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

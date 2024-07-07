const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

// Don't need a postData, won't be saving post to a seed file.

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

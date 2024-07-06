const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');

// Don't need a postData, won't be saving post to a seed file.

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

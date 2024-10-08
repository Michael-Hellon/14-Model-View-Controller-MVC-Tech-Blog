const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
}
seedDatabase();

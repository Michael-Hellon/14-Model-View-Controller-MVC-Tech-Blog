const { User } = require("../models");

const userData = [
  {
    name: "Michael",
    email: "me@yahoo.com",
    password: "abcde12345"
  },
  {
    name: "John Wick",
    email: "JW@yahoo.com",
    password: "password12345"
  },
  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345"
  }
];


const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = seedUser;

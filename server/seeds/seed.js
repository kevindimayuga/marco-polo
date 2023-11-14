const db = require('../config/connection');
const { foundItems, lostItems, users } = require('../models');
const cleanDB = require('./cleanDB');
const lostItemsSeeds = require('./lostItemData.json');
const foundItemsSeeds = require('./foundItemData.json');
const usersSeeds = require('./usersData.json');
// const users = require('../models/users');
db.once('open', async () => {
  await cleanDB('lostItems', 'lostItems');
  await cleanDB('foundItems', 'foundItems');
  await cleanDB('users', 'users');
  console.log(usersSeeds)
  await lostItems.create(lostItemsSeeds);
  await foundItems.create(foundItemsSeeds);
  await users.create(usersSeeds);
  console.log('Items and Users Seeded!');
  process.exit(0);
});

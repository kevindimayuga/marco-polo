const db = require('../config/connection');
const { foundItems, lostItems, users } = require('../models');
const cleanDB = require('./cleanDB');

const lostItemsData = require('./lostItemData.json');
const foundItemsData = require('./foundItemData.json');
// const usersData = require('./usersData.json');
const user = require('../models/users');


db.once('open', async () => {
  await cleanDB('lostItems', 'LostItems');
  await cleanDB('foundItems', 'FoundItems');
  await cleanDB('user', 'users');

  const lostItems = await lostItems.create(lostItemsData);
  const foundItems = await foundItems.create(foundItemsData);
  const users = await users.map(usersData);



  console.log('Items and Users Seeded!');
  process.exit(0);
});

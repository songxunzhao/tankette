const users = require('./users');
const inventoryitems = require('./inventoryitems');
const turrets = require('./turrets');
const hulls = require('./hulls');
const engines = require('./engines');
const batteries = require('./batteries');
const barrels = require('./barrels');

module.exports = (router) => {
  users(router);
  inventoryitems(router);
  turrets(router);
  hulls(router);
  engines(router);
  batteries(router);
  barrels(router);
  return router;
};
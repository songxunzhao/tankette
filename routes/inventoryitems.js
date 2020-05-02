const controller = require('../controllers/inventoryitems');
const jwtAuth = require('../jwtauth');

module.exports = (router) => {
  router.route('/inventory_items')
    .all(jwtAuth.validateToken)
    .post(controller.add)
    .get(controller.getAll);

  router.route('/inventory_items/:id')
    .all(jwtAuth.validateToken)
    .get(controller.getOne)
    .put(controller.update);
};
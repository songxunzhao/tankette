const controller = require('../controllers/batteries');
const jwtAuth = require('../jwtauth');

module.exports = (router) => {
  router.route('/batteries')
    .all(jwtAuth.validateToken)
    .post(controller.add)
    .get(controller.getAll);

  router.route('/batteries/:id')
    .all(jwtAuth.validateToken)
    .get(controller.getOne)
    .put(controller.update);
};
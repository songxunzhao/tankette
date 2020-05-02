const controller = require('../controllers/engines');
const jwtAuth = require('../jwtauth');

module.exports = (router) => {
  router.route('/engines')
    .all(jwtAuth.validateToken)
    .post(controller.add)
    .get(controller.getAll);

  router.route('/engines/:id')
    .all(jwtAuth.validateToken)
    .get(controller.getOne)
    .put(controller.update);
};
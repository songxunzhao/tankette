const controller = require('../controllers/barrels');
const jwtAuth = require('../jwtauth');

module.exports = (router) => {
  router.route('/barrels')
    .all(jwtAuth.validateToken)
    .post(controller.add)
    .get(controller.getAll);

  router.route('/barrels/:id')
    .all(jwtAuth.validateToken)
    .get(controller.getOne)
    .put(controller.update);
};
const controller = require('../controllers/hulls');
const jwtAuth = require('../jwtauth');

module.exports = (router) => {
  router.route('/hulls')
    .all(jwtAuth.validateToken)
    .post(controller.add)
    .get(controller.getAll);

  router.route('/hulls/:id')
    .all(jwtAuth.validateToken)
    .get(controller.getOne)
    .put(controller.update);
};
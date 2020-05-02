const controller = require('../controllers/turrets');
const jwtAuth = require('../jwtauth');

module.exports = (router) => {
  router.route('/turrets')
    .all(jwtAuth.validateToken)
    .post(controller.add)
    .get(controller.getAll);

  router.route('/turrets/:id')
    .all(jwtAuth.validateToken)
    .get(controller.getOne)
    .put(controller.update);
};
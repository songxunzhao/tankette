const controller = require('../controllers/users');
const jwtAuth = require('../jwtauth');

module.exports = (router) => {
  router.route('/users')
    .post(controller.add)
    .get(jwtAuth.validateToken, controller.getAll);

  router.route('/login')
    .post(controller.login)
};
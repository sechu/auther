
var router = require('express').Router();
var User = require('../users/user.model');

router.post('/', function(req, res, next) {

  User.findOne( { where: req.body } )
  .then(function(user) {
    if(!user) {
      res.sendStatus(401);
    } else {
      // req.session.cookie.maxAge = 30000;
      req.session.userId = user.id;
      console.log('login router', user);
      res.status(204).json(user);
    }
  })
  .catch(next);

});

module.exports = router;

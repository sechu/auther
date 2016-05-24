
var router = require('express').Router();
var User = require('../users/user.model');

router.post('/', function(req, res, next) {

  User.findOne( { where: req.body } )
  .then(function(user) {
    if(!user) {
      res.sendStatus(401);
    } else {

      req.session.userId = user.id;
      console.log('login router', req.session);
      res.sendStatus(204);
    }
  })
  .catch(next);

});

module.exports = router;

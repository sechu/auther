
var router = require('express').Router();
var User = require('../users/user.model');

router.get('/', function(req,res,next) {
  res.json(req.session);
}

router.post('/', function(req, res, next) {
  User.findOne( { where: req.body } )
  .then(function(user) {
    if(!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      console.log('logging in with session',req.session);
      console.log('sessionId', req.sessionID);

      res.json(user);
    }
  })
  .catch(next);
});

router.delete('/', function(req, res, next) {
    req.session.destroy();
    console.log('session destroyed', req.session);
    res.sendStatus(204);
});

module.exports = router;

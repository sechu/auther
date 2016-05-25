
var router = require('express').Router();
var User = require('../users/user.model');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


router.post('/', function(req, res, next) {
  User.findOne( { where: req.body } )
  .then(function(user) {
    if(!user) {
      res.sendStatus(401);
    } else {
      // req.session.cookie.maxAge = 30000;
      req.session.userId = user.id;
      req.session.save(function() {
        res.json(user);
      });  
    }
  })
  .catch(next);
});

router.get('/', function(req, res, next) {
  User.findOne({
    where: {
      id: req.session.userId
    }
  })
  .then(function(user) {
    res.json(user);
  })
  .catch(function(error) {
    res.send('cannot find user');
  })
})

router.delete('/', function(req, res, next) {
    req.session.destroy();
    console.log('session destroyed', req.session);
    res.sendStatus(204);
});


passport.use(
  new GoogleStrategy({
    clientID: '608940728791-qatbb1bham8ojo1beog2sq0sriihtr4m.apps.googleusercontent.com',
    clientSecret: 'bWh8Kis_ZTDh2G0EtmYCV-Ct',
    callbackURL: 'http://127.0.0.1:8080/auth/google/callback'
  },
  // Google will send back the token and profile
  function (token, refreshToken, profile, done) {
    // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
   console.log('---', 'in verification callback', profile, '---');
    done();
  })
);

router.get('/google', passport.authenticate('google', {scope: 'email'}));
router.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

module.exports = router;

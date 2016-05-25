var express = require('express');
var router = express.Router();
var session = require('express-session');
var passport = require('passport');

router.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'tongiscool' // or whatever you like
 
}));


// // place right after the session setup middleware
// router.use(function (req, res, next) {
//   console.log('session', req.session);
//   next();
// });

router.use('/api', function (req, res, next) {
  // if (!req.session.counter) req.session.counter = 0;
  // req.session.counter++;
  console.log('session', req.session);
  next();
});

router.use(passport.initialize());
router.use(passport.session());


module.exports = router;

var app = require('express')();
var session = require('express-session');

app.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'tongiscool' // or whatever you like
}));

// place right after the session setup middleware
app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

app.use('/api', function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', ++req.session.counter);
  next();
});


module.exports = app;

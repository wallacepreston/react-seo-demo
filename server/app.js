const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan');
const {db, User} = require('./db');
const session = require('express-session')
const passport = require('passport');

// serializing user is adding session information to our store in DB, so Passport knows how to find the user for subsequent requests.
passport.serializeUser((user, done) => {
  console.log('serializing user: ');
  console.log(user)
  done(null, user.id)
});

// ...and for all subsequent requests, the user is "deserialized" or looked up from the database by the id we gave it when serializing
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

// MIDDLEWARE
//    logging middleware
app.use(morgan('dev'));

//    Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

// sync so that our session table gets created
dbStore.sync();

// plug the store into our session middleware
//    Session Middleware

// app.use(session());

// plug the store into our session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

// Passport: Initialize
app.use(passport.initialize());
app.use(passport.session());

// Static Middleware: Allows users/clients to access all files in the `public` directory
app.use(express.static(path.join(__dirname, '..', 'public')))

// Authentication Router
app.use('/auth', require('./auth'))

// For all GET requests that aren't to an API or auth route, send index.html
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error.');
});

module.exports = app

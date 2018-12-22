const router = require('express').Router()
const {User} = require('../db')
const passport = require('passport');
module.exports = router

// all routes below begin with '/auth'

// oauth router
// router.use('/google', require('./oauth'))

// fetch logged-in user on session
router.get('/me', (req, res, next) => {
  res.json(req.user)
})

// log in route
router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (!user) {
      res.status(401).send('User not found');
    } else if (!user.hasMatchingPassword(req.body.password)) {
      res.status(401).send('Incorrect password');
    } else {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    }
  } catch (err) {
    next(err)
  }
})

// sign-up route
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => {
      if (err) next(err);
      else res.json(user);
    });
  } catch (err) {
    next(err)
  }
})

// log out route
router.delete('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy()
  res.sendStatus(204);
});

// serializing user is adding session information to our store in DB, so Passport knows how to find the user for subsequent requests.
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

// ...and for all subsequent requests, the user is "deserialized" or looked up from the database by the id we gave it when serializing
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

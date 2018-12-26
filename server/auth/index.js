const router = require('express').Router()
const {User} = require('../db')
module.exports = router

// all routes below begin with '/auth'
// oauth router
router.use('/google', require('./oauth-google'))

// fetch logged-in user on session
router.get('/me', (req, res, next) => {
  console.log('>>>>>>>>>>>>>> req.user is: ', req.user)
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

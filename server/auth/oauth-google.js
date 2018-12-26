const router = require('express').Router()
const passport = require('passport')
const {User} = require('../db')
module.exports = router

if(process.env.NODE_ENV !== 'development') {
  console.log('>>>>>>>>>>>>>> NOTE: Your process.env.NODE_ENV is: `', process.env.NODE_ENV, '`\nIf in development: Please set your NODE_ENV to `development`. \n Via Command Line: \n linux & mac: export NODE_ENV=development \n windows: set NODE_ENV=development')
}
if (process.env.NODE_ENV === 'development') {
  process.env.GOOGLE_CLIENT_ID = require('./secrets/local-google-client-id');
  process.env.GOOGLE_CLIENT_SECRET = require('./secrets/local-google-client-secret');
}

// Google authentication and login (GET /auth/google)
router.get('/', passport.authenticate('google', { scope: 'email' }));

// handles the callback after Google has authenticated the user (GET /auth/google/callback)
router.get('/callback',
  passport.authenticate('google', {
    successRedirect: '/home', // or wherever
    failureRedirect: '/' // or wherever
  })
)

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  // Google will send back the token and profile
  (token, refreshToken, profile, done) => {
    // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
   console.log('---', 'in verification callback', profile, '---');
   const info = {
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
    email: profile.emails[0].value,
    imageURL: profile.photos ? profile.photos[0].value : undefined
    }

    User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    })
    .spread((user) => {
      done(null, user)
    })
    .catch(done)
  })
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  }
  catch (err){
    done(err)
  }
});

import passport from 'passport';
const FacebookStrategy = require('passport-facebook').Strategy;
import keys from '../../config/keys.js';


passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID, //FACEBOOK_APP_ID,
    clientSecret: keys.facebookClientSecret, //FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('access token: ',accessToken);
    console.log('refresh token: ',refreshToken);
    console.log('profile token: ', profile);
    //save information to our database of the unique user
  }
));

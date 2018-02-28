const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../../config/keys.js");

//Model class USER
const User = mongoose.model("users");

//Serialize user.
// - user that was just created or retrieved.
passport.serializeUser(function(user, done) {
  done(null, user.id); //shortcut to id in the collection of user not profile id.
});

//Deserialize user.
// - look for the user with that id in our collections.
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID, //FACEBOOK_APP_ID,
      clientSecret: keys.facebookClientSecret, //FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //save information to our Mongo database of the unique user
      // -- before we add new user check if they already exist.
      const existingUser = await User.findOne({ facebookId: profile.id }); //promise
      if (existingUser) {
        // we already have a record with given profile id.
        console.log("User already exsists");
        // Once we created the user or checked we use done function.
        // -first param error obj
        // -second param existingUser user
        return done(null, existingUser);
      }
      // we dont have a use record with this ID, make a new record.
      //creates single record (model instance)
      const user = await new User({ facebookId: profile.id }).save(); //promise
      done(null, user);
      console.log("Succes User saved to database");
    }
  )
);

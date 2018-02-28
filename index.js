//Client ID = EJ_Sc_I3JPU-
//Client Secret = Uuv__DnjX4OhIp-zp5Idt4mexTZfukKQ

const express = require('express');
const mongoose = require('mongoose');
const keys = require('../../config/keys.js');
const cookieSession = require('cookie-session'); //access to cookies
const passport = require('passport');
const authRoutes = require('./src/routes/authRoutes');
const modelUsers = require('./src/models/User'); // (1st) order of import matters with models
const passportConfig = require('./src/service/passport'); // (2nd) order of import matters with passport
const bodyParser = require('body-parser');

const app = express();


//cookies setup
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


//auth routes file and its get functions.
authRoutes(app);


// mongoose connection
mongoose.connect(keys.mongoURI);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

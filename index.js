//Client ID = EJ_Sc_I3JPU-
//Client Secret = Uuv__DnjX4OhIp-zp5Idt4mexTZfukKQ

import express from 'express';
import mongoose from 'mongoose';
import keys from './config/keys.js';
import cookieSession from 'cookie-session'; //access to cookies
import passport from 'passport'; //makes use of cookies
import authRoutes from './src/routes/authRoutes';
import modelUsers from './src/models/User'; // (1st) order of import matters with models
import passportConfig from './src/service/passport'; // (2nd) order of import matters with passport
import bodyParser from 'body-parser';

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

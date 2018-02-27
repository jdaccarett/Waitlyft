//Client ID = EJ_Sc_I3JPU-
//Client Secret = Uuv__DnjX4OhIp-zp5Idt4mexTZfukKQ

import express from 'express';
import passportConfig from './src/service/passport';
import authRoutes from './src/routes/authRoutes';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';



const app = express();

//auth routes file and its get functions.
authRoutes(app);


// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());











const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

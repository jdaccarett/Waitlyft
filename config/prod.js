// prod.js - production keys here.
// module.exports = {
//   facebookClientID : 417821688671161,
//   facebookClientSecret: "94b0aee63a4031e25414ec3e55a24cab",
//   mongoURI: 'mongodb://jdaccarett:weeman91@ds251548.mlab.com:51548/waitlyft-prod',
//   cookieKey: 'sdjfsldjfsldjfsdhgsdfjsldfjsttsdfksdd'
// };

// prod.js - production keys here.
module.exports = {
  facebookClientID : process.env.GOOGLE_CLIENT_ID,
  facebookClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};

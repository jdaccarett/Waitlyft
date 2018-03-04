const requireLogin = require('../../middlewares/requireLogin');

module.exports = app => {

  app.post('/api/tables', requireLogin, (req, res) =>{


  });
};

const mongoose = require('mongoose');
const requireLogin = require('../../middlewares/requireLogin');


const Table = mongoose.model('tables');

module.exports = app => {

  app.post('/api/tables', requireLogin, (req, res) =>{
    const { tableNumber, tableSection, seats, est_wait_time, reserve } = req.body;

    const table = new Table({
      tableNumber: tableNumber,
      tableSection: tableSection,
      seats: seats,
      est_wait_time: est_wait_time,
      reserve: reserve,
      _user: req.user.id
    });

    table.save();

  });

  app.get('/api/tables', requireLogin, async (req, res) =>{
    const tables = await Table.find({_user: req.user.id});

    res.send(tables);
    
  });

};
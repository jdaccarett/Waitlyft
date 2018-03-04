// -- Model
// This is where we're going to create our schema and connect to mongodb.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tableSchema = new Schema({
  tableNumber: Number,
  tableSection: Number,
  seats: Number,
  est_wait_time: Number,
  reserve: Boolean,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});


// to create a model class
mongoose.model("tables", tableSchema);

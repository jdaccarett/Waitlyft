// -- Model
// This is where we're going to create our schema and connect to mongodb.
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const userSchema = new Schema({
    facebookId: String
});


// to create a model class
mongoose.model('users', userSchema);

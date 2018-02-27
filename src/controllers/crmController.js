// --- Controller :
// used to house most of our logic of our server, so when we need
// to return a specific data and sen it to our API.
import mongoose from 'mongoose';
import { WaitListSchema } from '../models/crmModel';

const WaitList = mongoose.model('WaitList', WaitListSchema);

export const addNewRestaurant = (req, res) => {
    let newRestaurant = new WaitList(req.body);

    newRestaurant.save((err, restaurant) => {
        if (err) {
            res.send(err);
        }
        res.json(restaurant);
    });
};

export const addNewTable = (req, res) => {

    // console.log(req.body);

    // ObjectId("5a909210c2f728ce0805547c")

    var query = {restaurant: 'juanitos'};
    var update =   {
       $push : {
          tablesWaitListed :  req.body
        }
      }

    WaitList.update(query, update, { new: true }, (err, location) =>{
      if (err) {
          res.send(err);
      }
      res.json(location);
    });

};

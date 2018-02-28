// // -- Routes
// // where we create our own API endpoints
// import { addNewRestaurant, addNewTable } from '../controllers/crmController';
//
// const routes = (app) => {
//     // Add New Restaurant endpoint
//     app.route('/addNewRestaurant')
//     // -- GET
//     .get((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         next();
//     }, (req, res, next) =>{
//       res.send('GET request successfull');
//     })
//     // -- Post
//     .post(addNewRestaurant);
//
//     app.route('/addNewRestaurant/:restaurantId')
//     // -- Put
//     .put((req, res) =>
//     res.send('PUT request successfull!!!'))
//     // -- Delete
//     .delete((req, res) =>
//     res.send('DELETE request successfull!!!'));
//
//
//     // Add New WaitListed Table
//     app.route('/addTableToWaitList')
//     // -- GET
//     .get((req, res, next) => {
//         // middleware
//         console.log(`Request from: ${req.originalUrl}`)
//         console.log(`Request type: ${req.method}`)
//         next();
//     }, (req, res, next) =>{
//       res.send('GET request successfull');
//     })
//     // -- Post
//     .post(addNewTable);
//
//     app.route('/addTableToWaitList')
//     // -- Put
//     .put(addNewTable)
//     // -- Delete
//     .delete((req, res) =>
//     res.send('DELETE request successfull!!!'));
//
//
//
//
// }
//
// export default routes;

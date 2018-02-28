// const axios = require('axios');
//
// // Step 1: Obtain an access token via Post Request
// const setAuthToken = function(func){
//   axios({
//     method: 'post',
//     url: 'https://api.lyft.com/oauth/token',
//     headers: {'Content-Type': 'application/json'},
//     data: {
//       grant_type: 'client_credentials',
//       scope: 'public'
//     },
//     auth: {
//       username: 'EJ_Sc_I3JPU-',
//       password: '1O21LiXRAmkUI6TpF_JC6UcOQmPeaFIz'
//     },
//     responseType: 'json'
//   })
//     .then(function(response) {
//       func(response.data.access_token);
//
//   });
//
// }
//
// export default setAuthToken;


// app.get('/', function(req, res){
//
//   // var get_eta_estimates = function(param){
//   //   axios({
//   //     method: 'get',
//   //     url: 'https://api.lyft.com/v1/eta',
//   //     headers: {'Authorization': 'Bearer ' + param},
//   //     // `params` are the URL parameters to be sent with the request
//   //     // Must be a plain object or a URLSearchParams object
//   //     params: {
//   //       lat: '12345',
//   //       lng: '-122.4167'
//   //     }
//   //   })
//   //     .then(function(response) {
//   //       console.log(response.data);
//   //
//   //     })
//   // }
//   //
//   // setAuthToken(get_eta_estimates);
//
// });
//
//
// app.get('/getCost', function(req, res){
//
//   // var get_cost_estimates = function(param){
//   //   axios({
//   //     method: 'get',
//   //     url: 'https://api.lyft.com/v1/cost',
//   //     headers: {'Authorization': 'Bearer ' + param},
//   //     // `params` are the URL parameters to be sent with the request
//   //     // Must be a plain object or a URLSearchParams object
//   //     params: {
//   //       start_lat: '37.344114',
//   //       start_lng: '-120.572455',
//   //       end_lat: '37.340564',
//   //       end_lng: '-120.609578'
//   //     }
//   //   })
//   //     .then(function(response) {
//   //       console.log(response.data);
//   //
//   //     })
//   // }
//   //
//   // setAuthToken(get_cost_estimates);
//
// });

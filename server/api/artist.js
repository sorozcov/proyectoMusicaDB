var express = require('express');
var Artist = require('../models/artist');

var api = express.Router();

api.get('/', (req, res) => {
  Artist.retrieveAll((err, artist) => {
    if (err)
      return res.json(err);
    return res.json(artist);
  });
});


// api.post('/', (req, res) => {
//   var city = req.body.city;

//   Cities.insert(city, (err, result) => {
//     if (err)
//       return res.json(err);
//     return res.json(result);
//   });
// });

module.exports = api;
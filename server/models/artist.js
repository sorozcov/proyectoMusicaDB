const db = require('../database');

class Artist {
  static retrieveAll (callback) {
    db.query('SELECT name from artist', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  // static insert (city, callback) {
  //   db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
  //     if (err.error)
  //       return callback(err);
  //     callback(res);
  //   });
  // }
}

module.exports = Artist;
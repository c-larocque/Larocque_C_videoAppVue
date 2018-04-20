// Handle the routing requests => the request gets passed in via the route
var config = require('../config');
const connect = require('../utils/sqlConnect');

exports.get_users = (req, res) => {
  console.log('hit get users');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }

    res.render('index');
  })
};

exports.get_all_adults = (req, res) => {
  console.log('hit get all movies');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }
    let query = `SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`;

    connect.query(query, (err, rows) => {
      connection.release(); // let somebody else use this connection

      if (err) {
        return console.log(err.message);
      }

      console.log(rows);

      res.render('adults', {
        defaultMovie : rows[Math.floor(Math.random() * rows.length)],
        data : JSON.stringify(rows),
        adultpage : true,
        kidspage : false,
        detailspage : false
      });
    })
  })
};

exports.get_all_kids = (req, res) => {
  console.log('hit get all movies');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }
    let query = `SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`;

    connect.query(query, (err, rows) => {
      connection.release(); // let somebody else use this connection

      if (err) {
        return console.log(err.message);
      }

      console.log(rows);

      res.render('kids', {
        defaultMovie : rows[Math.floor(Math.random() * rows.length)],
        data : JSON.stringify(rows),
        adultpage : false,
        kidspage : true,
        detailspage : false
      });
    })
  })
};

exports.get_one_movie = (req, res) => {
  console.log('hit get one movie');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }
    //let query = `SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`;

    let query = `SELECT movies_id, movies_title, movies_storyline, movies_year FROM tbl_movies WHERE movies_id = "${req.params.id}"`;

    //let query = `SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`;

    connect.query(query, (err, rows) => {
      connection.release();

      if (err) {
        return console.log(err.message);
      }

      console.log(rows);

      res.render('details', {
        movie : req.params.id,
        moviesrc : req.params.movie,
        data : JSON.stringify(rows),
        movieData : rows[0],
        adultpage : false,
        kidspage : false,
        detailspage : true
      });
    })
  })
};

exports.get_all_reviews = (req, res) => {
  console.log(`hit get all reviews; id: ${req.params.id}`);

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`;

    connect.query(query, (err, rows) => {
      connection.release();

      if (err) {
        return console.log(err.message);
      }

      console.log(rows);

      res.json(rows);
    })
  })
};

exports.post_new_review = (req, res) => {
  console.log('hit post new review');

  connect.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }
    let query = `INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP(), "${req.body.id}", "${req.body.stars}");`;

    connect.query(query, (err, rows) => {
      connection.release();

      if (err) {
        return console.log(err.message);
      }

      res.json(rows);
    })
  })
};

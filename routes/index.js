var express = require('express');
var videoController = require('../controllers/videoAppController');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));
// var connect = require('../utils/sqlConnect');

//router.get('/', videoController.get_users);
router.get('/adults', videoController.get_all_adults);
router.get('/kids', videoController.get_all_kids);
router.get('/movies/:id/:movie', videoController.get_one_movie);
router.get('/api/:id', videoController.get_all_reviews);
router.post('/api', videoController.post_new_review);

// router.get('/', function(req, res, next) {
//   connect.query('SELECT * FROM tbl_movies', (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//
//   res.render('index', {
//     moviesData: result
//   });
// }
// });
// });

module.exports = router;

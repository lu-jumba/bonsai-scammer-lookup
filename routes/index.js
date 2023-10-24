var express = require('express');




var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lookup!' });
  next()
}

,
(req, res) => {
  //res.locals.filter = null;
  res.render('index', { title: 'Lookup!' });
},
);

module.exports = router;

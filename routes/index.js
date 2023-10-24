var express = require('express');




var router = express.Router();

router.post('/', function(req, res) {
  res.render('index', { title: 'Lookup!' });
}

,
(req, res) => {
  //res.locals.filter = null;
  res.render('index', { title: 'Lookup!' });
},
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Lookup!' });
  next()
}

/*,
(req, res) => {
  //res.locals.filter = null;
  res.render('index', { title: 'Lookup!' });
},*/
);

module.exports = router;

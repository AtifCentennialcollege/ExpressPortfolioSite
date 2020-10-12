var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

router.get('/aboutMe', function(req, res, next) {
  res.render('index', { title: 'About Me',});
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects',});
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',});
});

router.get('/contactUs', function(req, res, next) {
  res.render('index', { title: 'Contact Us',});
});


module.exports = router;

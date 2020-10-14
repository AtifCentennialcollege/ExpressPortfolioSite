var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',});
});
/* Home */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',});
});
/* About Me */
router.get('/aboutMe', function(req, res, next) {
  res.render('index', { title: 'About Me',});
});
/* Projects */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects',});
});
/* Services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',});
});
/* Contact Me */
router.get('/contactMe', function(req, res, next) {
  res.render('index', { title: 'Contact Me',});
});


module.exports = router;

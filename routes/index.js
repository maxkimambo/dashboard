var express = require('express');
var router = express.Router();

var bvg = require('./../src/bvg');
var weather = require('./../src/weather');
var config = require('./../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {

  bvg.getSchedule(config.bvg.station).then(function(res){
    console.log(res);
  });

  weather.getCurrentWeather().then(function(res){

  });

  res.render('index', { title: 'Express' });
});

module.exports = router;

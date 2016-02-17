var express = require('express');
var router = express.Router();

var bvg = require('./../src/bvg');
var weather = require('./../src/weather');
var config = require('./../config/config');

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {title: 'Express'});
});

router.get('/weather', function (req, res, next) {

    weather.getCurrentWeather().then(function (result) {
        res.json(result);
    });
});

router.get('/traffic', function(req, res, next){

    bvg.getSchedule(config.bvg.station).then(function (result) {

        res.json(result);
    });
});

module.exports = router;

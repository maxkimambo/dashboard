/**
 * Created by max on 2/16/16.
 */
var bvg = require('./bvg');
var weather = require('./weather');
var config = require('./../config/config');

bvg.getSchedule(config.bvg.station).then(function(res){
      console.log(res);
});

//console.log();


weather.getCurrentWeather();
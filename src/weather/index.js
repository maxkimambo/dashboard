/**
 * Created by max on 2/17/16.
 */
var http = require('./../httpClient');
var config = require('./../../config/config')
var weather = function(){};

weather.prototype.getCurrentWeather = function (){
var requestUrl = config.hostUrl + config.city + '&appid='+config.apiKey;
    http.get(requestUrl).then(function(res){
        console.log(res);
    });
};

module.exports = new weather();

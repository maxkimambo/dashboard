/**
 * Created by max on 2/17/16.
 */
var http = require('./../httpClient');
var config = require('./../../config/config');
var weather = function(){};
var q = require('q');


weather.prototype.getCurrentWeather = function (){

     var requestUrl = config.weather.hostUrl + config.weather.city + '&appid='+config.weather.apiKey;

     var defer = q.defer();

    http.get(requestUrl).then(function(res){
        defer.resolve(res);
    });
    return defer.promise;
};

module.exports = new weather();

/**
 * Created by max on 2/17/16.
 */
var http = require('./../httpClient');
var config = require('./../../config/config');
var weather = function(){};
var q = require('q');


weather.prototype.getCurrentWeather = function (){

     var requestUrl = config.weather.hostUrl + config.weather.city + '&units=metric' + '&appid='+config.weather.apiKey;
     var defer = q.defer();

    http.get(requestUrl).then(function(res){

        var data  = JSON.parse(res);
            data.iconUrl = config.weather.imageUrl;

            defer.resolve(res);
    });
    return defer.promise;
};

weather.prototype.trimData = function(res){
   return {
       temp: 'Temp ' + res.main.temp + ' C',
       pressure: res.main.pressure,
       humidity: res.main.humidity,
       description : res.weather[0].description,
       icon : res.weather[0].icon,
       sunrise: res.sys.sunrise,
       sunset :res.sys.sunset,
       windspeed : 'Wind ' + res.wind.speed + 'km/h'
   }
};



module.exports = new weather();

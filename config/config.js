/**
 * Created by max on 2/17/16.
 */
var config = {};

config.weather = {
    apiKey: '67eaa21c69df0a3c424c0614362fa66b',
    city: 'Berlin',
    hostUrl: 'http://api.openweathermap.org/data/2.5/weather?&q=',
    imageUrl: 'http://openweathermap.org/img/w/',
    refreshInterval : 1000*60*1

};

config.news ={

};

config.bvg = {
    station : 'Invalidenpark',
    timeToStation : 5,
    refreshInterval : 1000*60*1,
    recordsToFetch : 10
};

module.exports = config;


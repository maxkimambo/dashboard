/**
 * Created by max on 2/17/16.
 */

var bvg = require('./bvg');
var weather = require('./weather');
var config = require('./../config/config');
var _ = require('lodash');


module.exports =  listen;

function listen (server){

   var clients = [];
   var io = require('socket.io')(server);

    io.on('connection', function (socket){
        console.log('connected %s', socket.conn.id);
        // save connections
        clients.push(socket.conn);

        fetchBvgData();

        setInterval(function(){
            fetchBvgData();
        }, config.bvg.refreshInterval);

        // get weather data
        fetchWeather();

        setInterval(function(){

           fetchWeather();

        }, config.weather.refreshInterval);


        function fetchBvgData() {
            // obtain the schedule.
            bvg.getSchedule(config.bvg.station).then(function (result) {
                result.station = config.bvg.station;
                io.emit('traffic', result);
            });
        }

        function fetchWeather(){

            weather.getCurrentWeather().then(function(weatherData){

                // we do io.emit because we send the info to all the connected clients all at once.
                io.emit('weather', weatherData);
            }, function(err){
                console.error(err);
            });
        }


    });










}


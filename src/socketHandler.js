/**
 * Created by max on 2/17/16.
 */

var bvg = require('./bvg');
var weather = require('./weather');
var config = require('./../config/config');


module.exports =  listen;

 function listen (server){

   var clients = [];
   var io = require('socket.io')(server);

    io.on('connection', function (socket){
        console.log('connected %s', socket.conn.id);
        // save connections
        clients.push(socket.conn);

        // obtain the schedule. 
        bvg.getSchedule(config.bvg.station).then(function(result){
                 socket.emit('traffic', result);
        });

        // get weather data

        weather.getCurrentWeather().then(function(weatherData){

            socket.emit('weather', weatherData);

        });


    });








}


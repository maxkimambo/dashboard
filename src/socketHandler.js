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

        setInterval(function(){
            // obtain the schedule.
            bvg.getSchedule(config.bvg.station).then(function(result){
                socket.emit('traffic', result);
            });
        }, 1000*60*1); // every min

        // get weather data

        setInterval(function(){

            weather.getCurrentWeather().then(function(weatherData){
                console.log(weatherData);
                socket.emit('weather', weatherData);
            });

        }, 1000*60*5); // every 5 min

    });








}


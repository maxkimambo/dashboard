/**
 * Created by max on 18.02.16.
 */
'use strict';

(function(){
    angular.module('dash').controller('dashboardController', dashController);
    dashController.$inject = ["$scope"];

    function dashController($scope){


        var socket = io.connect('http://localhost:3000');

        socket.on('connect', function(data){
            console.log('connected to socket');
            socket.emit('join', 'Test');
        });

        socket.on('traffic', function(trafficData){
            $scope.$apply(function(){
                $scope.trafficData = trafficData;
            });

        });

        socket.on('weather', function(weatherData){
            $scope.$apply(function(){
                var weather = JSON.parse(weatherData);
                $scope.weather = trimWeatherData(weather);
                console.log($scope.weather);
            });
        });

        function trimWeatherData(res){

           return  { temp: 'Temp ' + res.main.temp + ' C',
                pressure: res.main.pressure,
                humidity: res.main.humidity,
                description : res.weather[0].description,
                icon : res.weather[0].icon,
                sunrise: res.sys.sunrise,
                sunset :res.sys.sunset,
                windspeed : 'Wind ' + res.wind.speed + 'km/h'
            };

        }


    }
})();

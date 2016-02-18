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
                    console.log(trafficData);
            });

        });

        socket.on('weather', function(weatherData){
            $scope.$apply(function(){
                $scope.weather = weatherData;
                console.log(weatherData);
            });
        });

    }
})();

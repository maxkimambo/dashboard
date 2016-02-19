/**
 * Created by max on 18.02.16.
 */
'use strict';

(function(){
    angular.module('dash').controller('dashboardController', dashController);
    dashController.$inject = ["$scope"];

    function dashController($scope){

        function calcTimeToSunset(sunset){
             return  moment(sunset).calendar();
        }

        function calcTimeToSunrise(sunrise){
           return moment(sunrise).calendar();
        }

        var socket = io.connect('http://localhost:3000');

        socket.on('connect', function(data){
            console.log('connected to socket');
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
                $scope.sunset = calcTimeToSunset($scope.weather.sunset);
                $scope.sunrise = calcTimeToSunrise($scope.weather.sunrise);

                console.log($scope.weather);
            });
        });

        function trimWeatherData(res){

           return  { temp: 'Temp ' + res.main.temp + ' C',
                pressure: res.main.pressure,
                humidity: res.main.humidity,
                description : res.weather[0].description,
                icon : res.weather[0].icon,
                image: 'http://openweathermap.org/img/w/' + res.weather[0].icon +'.png',
                sunrise: res.sys.sunrise * 1000,
                sunset : res.sys.sunset * 1000,
                windspeed :  res.wind.speed + 'km/h'
            };
        }
    }
})();

//image hack
(function(){
    $(document).ready(function(){

        setImage();

        setInterval(setImage, 1000);

        setInterval(setHumidity, 1000);

    });

    function setImage(){
        var image_url = $('#weather_image_hidden').text();
        $('#weather_image').attr('src', image_url);
    }

    function setHumidity(){
        var humidity_value =   $('#humidity_bar').text();

        $('#humidity_bar').css("width", humidity_value + "%")
    }

})();
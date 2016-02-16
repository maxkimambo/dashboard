/**
 * Created by max on 2/16/16.
 */
var httpClient = require('./../../httpClient');
var cheerio = require('cheerio');
var q = require('q');

var bvg = function (){

};

bvg.prototype.getSchedule = function(stationName){

    var defer = q.defer();

    var url ='http://mobil.bvg.de/Fahrinfo/bin/stboard.bin/dox?ld=0.1&input='+ stationName +'&boardType=depRT&start=yes';
    var scheduleData = [];

    httpClient.get(url).then(function(res){

       var $ = cheerio.load(res);


        var scheduleItem = {};
        var counter = 0;

        $('table>tbody>tr').children().each(function(ind, elem){

            switch (counter){
                case 0: {
                    scheduleItem.departure = $(this).text();
                    counter++;
                    break;
                }

                case 1: {
                    scheduleItem.line = $(this).text();
                    counter++;
                    break;
                }
                case 2:{
                    scheduleItem.direction = $(this).text();
                    counter++;
                    break;
                }

            }

            // we need to reset the counter every 3rd item
            // there are only 3 cells in the table

            if ((ind % 3) === 2) {
                counter = 0;
                scheduleData.push(scheduleItem);
            }
        });

        defer.resolve(scheduleData);
    });

    return defer.promise;

};


module.exports = new bvg();
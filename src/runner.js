/**
 * Created by max on 2/16/16.
 */
var bvg = require('./bvg');

bvg.getSchedule('roederplatz').then(function(res){
      console.log(res);
});
/**
 * Created by max on 2/17/16.
 */
var io = {};

module.exports =  {

    listen: function(server){
        io = require('socket.io')(server);


        io.on('connection', function (s){
            console.log('connected %s', s.conn.id);
        });

    }
};
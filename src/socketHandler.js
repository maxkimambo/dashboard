/**
 * Created by max on 2/17/16.
 */

module.exports =  {

    listen: listen
};

 function listen (server){
   var io = require('socket.io')(server);

    io.on('connection', function (s){
        console.log('connected %s', s.conn.id);
    });
}


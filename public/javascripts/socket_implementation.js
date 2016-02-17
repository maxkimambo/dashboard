/**
 * Created by max on 2/17/16.
 */
var socket = io.connect('http://localhost:3000');

socket.on('connect', function(data){
    console.log('connected to socket');
    socket.emit('join', 'Test');
});
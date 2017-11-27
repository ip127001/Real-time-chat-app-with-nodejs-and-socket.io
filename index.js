var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, function(){
  console.log('listening to requests on port 4000');
});

//static file
app.use(express.static('public'));

//socket setup at server side
var io = socket(server);


//connnection method is made, callback
io.on('connection', function(socket){

   console.log('connected via socket', socket.id);

   socket.on('chat',function(data){
     io.sockets.emit('chat',data);
   });

   socket.on('typing',function(data){
     socket.broadcast.emit('typing',data);
   });

});

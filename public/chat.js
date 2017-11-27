//make a connnection at client
var socket = io.connect('http://localhost:4000');

//query dom
var text2 = document.getElementById('message'),
  text1 = document.getElementById('handle'),
  btn =  document.getElementById('send'),
  output =  document.getElementById('output'),
  feedback = document.getElementById('feedback');

btn.addEventListener('click', function(){
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function(){
  socket.emit('typing',handle.value);
});

//listen for events
socket.on('chat', function(data){
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle  + ': </strong>' + data.message + '</p>';

});

//listen for typing event
socket.on('typing',function(data){
  feedback.innerHTML = '<p><em>' + data + 'is typing a message....</em></p>';
});

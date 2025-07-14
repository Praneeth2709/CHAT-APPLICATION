const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', function(socket) {
  console.log('Someone connected!');

  socket.on('message', function(msg) {
    server.clients.forEach(function(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    });
  });

  socket.on('close', function() {
    console.log('Someone left.');
  });
});

console.log('Chat server running on ws://localhost:8080');
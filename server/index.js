const express = require('express');
const app = express();
const http = require('http').Server(app);
const cwd = require('process').cwd();
const io = require('socket.io')(http);

let sessions = [];

app.use(express.static(cwd + '/'))

app.get('/', function(req, res){
  res.sendFile(cwd + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  sessions.push({ name: 'hello' });
});

app.get('/sessions', (req, res) => {
  res.send(JSON.stringify(sessions));
});

app.get('/create', (req, res) => {
  sessions.push({ name: 'new session'});
  io.emit('updateSessions', sessions);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
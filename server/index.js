const express = require('express')
const app = express()
const http = require('http').Server(app)
const cwd = require('process').cwd()
const io = require('socket.io')(http)

let sessions = []
app.use(express.static(cwd + '/'))

app.get('/', function (req, res) {
  res.sendFile(cwd + '/public/index.html')
})

io.on('connection', (socket) => {
  socket.emit('init', sessions)

  socket.on('create:session', data => {
    sessions.push(data)
    io.sockets.emit('update:sessions', sessions)
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})

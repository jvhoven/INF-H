const express = require('express')
const app = express()
const http = require('http').Server(app)
const cwd = require('process').cwd()
const io = require('socket.io')(http)

let rooms = [{
  name: 'General'
}, {
  name: 'Chilling'
}]
app.use(express.static(cwd + '/'))

app.get('/', function (req, res) {
  res.sendFile(cwd + '/public/index.html')
})

io.on('connection', (socket) => {
  socket.emit('init', rooms)

  socket.on('update:rooms', (empty, fn) => {
    fn(rooms)
  })

  socket.on('create:room', (name, fn) => {
    rooms.push({
      name
    })

    console.log('Emitting to all sockets')
    socket.broadcast.emit('update:rooms', rooms)
    fn(rooms)
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})

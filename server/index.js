const express = require('express')
const app = express()
const http = require('http').Server(app)
const cwd = require('process').cwd()
const io = require('socket.io')(http)

let rooms = [{
  name: 'General',
  userCount: 0
}, {
  name: 'Chilling',
  userCount: 0
}]

app.use(express.static(cwd + '/'))

app.get('/', function (req, res) {
  res.sendFile(cwd + '/public/index.html')
})

const modifyRoom = (socket, roomName, message, mode = 'join') => {
  // Emit a message to the room that socket/user has joined or left
  io.to(roomName).emit('user:update', message)

  // Increment user count
  rooms.forEach(room => {
    if (room.name === roomName) {
      mode === 'join' ? room.userCount++ : room.userCount--
    }
  })

  // Send update
  socket.broadcast.emit('update:rooms', rooms)
}

io.on('connection', (socket) => {
  // Send initial rooms on accepted connection.
  socket.emit('init', rooms)

  // Default channel is general
  socket.join('General', modifyRoom(socket, 'General', 'has joined the room'))

  /**
   * Upon creating a room, we send a list of updated rooms back.
   *
   * @param {null} empty - Only passed around for the purpose of making it work.
   * @param {function} fn - The callback to pass the updated array of rooms to.
   */
  socket.on('update:rooms', (empty, fn) => {
    fn(rooms)
  })

  /**
   * @param {string} name - Name of the new room.
   * @param {function} fn - The callback to pass the updated array of rooms to.
   */
  socket.on('create:room', (name, fn) => {
    rooms.push({
      name,
      userCount: 0
    })

    // Push updates onto the other connected sockets.
    socket.broadcast.emit('update:rooms', rooms)

    fn(rooms)
  })

  socket.on('disconnecting', () => {
    const [, leftRoom] = Object.keys(socket.rooms)
    modifyRoom(socket, leftRoom, 'has left the room', 'leaving')
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})

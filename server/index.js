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

let users = []
let messages = []

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
}

io.on('connection', (socket) => {
  // Send initial rooms on accepted connection.
  socket.emit('init', rooms)

  // Default channel is general
  socket.join('General', modifyRoom(socket, 'General', 'has joined the room'))

  // Push updates onto the other connected sockets.
  socket.broadcast.emit('update:rooms', rooms)

  /**
   * Upon creating a room, we send a list of updated rooms back.
   *
   * @param {null} empty - Only passed around for the purpose of making it work.
   * @param {function} cb - The callback to pass the updated array of rooms to.
   */
  socket.on('update:rooms', (empty, cb) => {
    cb(rooms)
  })

  /** Initial getter for the messages upon connecting, defaults to general room.
   */
  socket.on('update:messages', (empty, cb) => {
    cb(messages.filter(message => message.room === 'General'))
  })

  /**
   * @param {string} name - Name of the new room.
   * @param {function} cb - The callback to pass the updated array of rooms to.
   */
  socket.on('create:room', (name, cb) => {
    rooms.push({
      name,
      userCount: 0
    })

    // Push updates onto the other connected sockets.
    socket.broadcast.emit('update:rooms', rooms)

    cb(rooms)
  })

  socket.on('join:room', (roomName, cb) => {
    const [, currentRoom] = Object.keys(socket.rooms)
    if (currentRoom !== roomName) {
      socket.leave(currentRoom, modifyRoom(socket, currentRoom, 'has left the room', 'leaving'))
      socket.join(roomName, modifyRoom(socket, roomName, 'has joined the room'))

      // Send update
      socket.broadcast.emit('update:rooms', rooms)
      socket.emit('update:messages', messages.filter(m => m.room === roomName))
      cb(rooms)
    }
  })

  /**
   * TODO: Free name on leaving
   */
  socket.on('disconnecting', () => {
    const [, currentRoom] = Object.keys(socket.rooms)
    modifyRoom(socket, currentRoom, 'has left the room', 'leaving')

    // Push updates onto the other connected sockets.
    socket.broadcast.emit('update:rooms', rooms)
  })

  /**
   * Upon picking a name
   */
  socket.on('authenticate:user', (requestedName, cb) => {
    // check if name is taken
    const checkName = (requestedName) => {
      let taken = false

      users.forEach(name => {
        if (name === requestedName) {
          taken = true
          return
        }
      })

      return taken
    }

    let taken = checkName(requestedName)
    let response = {
      error: false,
      message: ''
    }

    if (taken) {
      cb(Object.assign(response, { error: true, message: 'It seems your username has already been taken.' }))
    } else {
      users.push(requestedName)
      cb(response)
    }
  })

  /**
   * @param {object} message - Message object.
   * @param {function} cb - The callback to pass the updated array of message to.
   */
  socket.on('create:message', (message, cb) => {
    messages.push(message)

    // Push updates onto the other connected sockets.
    const messagesForRoom = messages.filter(m => m.room === message.room)

    socket.broadcast.to(message.room).emit('update:messages', messagesForRoom)
    cb(messagesForRoom)
  })
})

http.listen(process.env.PORT || 5000)

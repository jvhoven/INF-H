export default class MessagesService {
  constructor (socket) {
    this.socket = socket
  }

  create (message) {
    return new Promise((resolve, reject) => {
      this.socket.emit('create:message', message, (data) => {
        resolve(data)
      })
    })
  }

  get messages () {
    return new Promise((resolve, reject) => {
      this.socket.emit('update:messages', null, (data) => {
        resolve(data)
      })
    })
  }
}

MessagesService.$inject = ['socket']

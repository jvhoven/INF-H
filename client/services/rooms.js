export default class RoomsService {
  constructor (socket) {
    this._rooms = []
    this.socket = socket
  }

  create (room) {
    return new Promise((resolve, reject) => {
      this.socket.emit('create:room', room, (data) => {
        resolve(data)
      })
    })
  }

  get rooms () {
    return new Promise((resolve, reject) => {
      this.socket.emit('update:rooms', null, (data) => {
        resolve(data)
      })
    })
  }
}

RoomsService.$inject = ['socket']

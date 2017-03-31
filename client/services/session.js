export default class SessionService {
  constructor (socket) {
    this._sessions = []
    this.socket = socket

    this.socket.on('init', (data) => {
      this._sessions = data
    })
  }

  create (session, cb) {
    this.socket.emit('create:session', session)
    this.socket.on('update:sessions', (data) => {
      cb(data)
    })
  }

  get sessions () {
    return this._sockets
  }
}

SessionService.$inject = ['socket']

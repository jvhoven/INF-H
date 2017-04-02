export default class UsersService {
  constructor (socket) {
    this.socket = socket
  }

  authenticate (name) {
    return new Promise((resolve, reject) => {
      this.socket.emit('authenticate:user', name, (response) => {
        if (response.error) {
          reject(response.message)
        }

        resolve()
      })
    })
  }
}

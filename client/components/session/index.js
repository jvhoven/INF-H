export default {
  selector: 'session',
  controller: function ($scope, socket) {
    this.sessions = []

    /** Receive session data on connect */
    socket.on('init', data => {
      this.sessions = data
    })

    /** Receive session data on new session */
    socket.on('update:session', data => {
      this.sessions = data
    })

    /** Create a new sessions */
    this.create = () => {
      socket.emit('create:session', { name: 'test' })
    }
  },
  controllerAs: 'sessionCtrl',
  templateUrl: '/client/components/session/index.html'
}
